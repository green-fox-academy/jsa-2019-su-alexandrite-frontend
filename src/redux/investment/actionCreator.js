import {
  SERVER_URL, API_URL, API_KEY, API_PROD_KEY, API_PROD_URL,
} from 'react-native-dotenv';
import {
  FETCH_PORTFOLIO_DETAILS_START,
  FETCH_PORTFOLIO_DETAILS_FAIL,
  FETCH_PORTFOLIO_DETAILS_SUCCESS,
} from './actionType';
import chartHelper from '../../common/chartHelper';

export const fetchPortfolioDetailsStart = () => ({
  type: FETCH_PORTFOLIO_DETAILS_START,
});

export const fetchPortfolioDetailsFail = (payload) => ({
  type: FETCH_PORTFOLIO_DETAILS_FAIL,
  payload,
});

export const fetchPortfolioDetailsSuccess = (payload) => ({
  type: FETCH_PORTFOLIO_DETAILS_SUCCESS,
  payload,
});

export const calculatePortfolioValue = () => async (dispatch, getState) => {
  try {
    const serverUrl = new URL(`${SERVER_URL}/investments/user/`);
    const headers = new Headers();
    const { accessToken } = getState().user;
    headers.append('authorization', `Bearer ${accessToken}`);

    dispatch(fetchPortfolioDetailsStart());
    const investmentsResult = await fetch(serverUrl, { headers });
    if (!investmentsResult.ok) {
      switch (investmentsResult.status) {
        case 401:
          throw new Error('Sorry, we cannot validate your identity. Please login and try again.');
        default:
          throw new Error('Oops, there\'s something wrong with our app.');
      }
    }

    const stocks = await investmentsResult.json();
    const symbols = stocks.map((stock) => stock.symbol);

    const companyLogoUrl = new URL(`${API_PROD_URL}/stock/market/batch`);
    companyLogoUrl.searchParams.append('symbols', symbols);
    companyLogoUrl.searchParams.append('types', 'company,logo');
    companyLogoUrl.searchParams.append('token', API_PROD_KEY);
    const companyLogoResult = await fetch(companyLogoUrl);
    if (!companyLogoResult.ok) {
      throw new Error('Oops, there\'s something wrong with our app.');
    }
    const companyAndLogo = await companyLogoResult.json();

    const priceUrl = new URL(`${API_URL}/stock/market/batch`);
    priceUrl.searchParams.append('symbols', symbols);
    priceUrl.searchParams.append('types', 'price');
    priceUrl.searchParams.append('token', API_KEY);
    const priceResult = await fetch(priceUrl);
    if (!priceResult.ok) {
      throw new Error('Oops, there\'s something wrong with our app.');
    }
    const parsedPriceResult = await priceResult.json();

    const instruments = {};
    const totalValue = stocks
      .map(({ shares, symbol }) => {
        instruments[symbol] = {
          logo: companyAndLogo[symbol].logo.url,
          company: companyAndLogo[symbol].company.companyName,
          description: companyAndLogo[symbol].company.description,
          marketValue: shares * parsedPriceResult[symbol].price,
        };
        return shares * parsedPriceResult[symbol].price;
      })
      .reduce((a, b) => a + b);
    const allocation = chartHelper.processInvestmentAllocationData(stocks, parsedPriceResult);
    dispatch(fetchPortfolioDetailsSuccess({
      totalValue,
      stocks,
      allocation,
      instruments,
    }));
  } catch (err) {
    dispatch(fetchPortfolioDetailsFail(err));
  }
};
