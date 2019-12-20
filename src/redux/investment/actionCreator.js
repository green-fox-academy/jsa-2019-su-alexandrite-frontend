import { SERVER_URL, API_URL, API_KEY } from 'react-native-dotenv';
import {
  FETCH_USER_INVESTMENT_SHARES_START,
  FETCH_USER_INVESTMENT_SHARES_FAIL,
  FETCH_USER_INVESTMENT_SHARES_SUCCESS,
  FETCH_STOCK_PRICE_START,
  FETCH_STOCK_PRICE_FAIL,
  FETCH_STOCK_PRICE_SUCCESS,
  FETCH_STOCK_PRICE,
} from './actionType';
import { round, transferToDollar } from '../../common/numbers';

export const fetchUserInvestmentSharesStart = () => ({
  type: FETCH_USER_INVESTMENT_SHARES_START,
});

export const fetchUserInvestmentSharesFail = (payload) => ({
  type: FETCH_USER_INVESTMENT_SHARES_FAIL,
  payload,
});

export const fetchUserInvestmentSharesSuccess = (payload) => ({
  type: FETCH_USER_INVESTMENT_SHARES_SUCCESS,
  payload,
});

export const fetchStockPriceStart = () => ({
  type: FETCH_STOCK_PRICE_START,
});

export const fetchStockPriceFail = (payload) => ({
  type: FETCH_STOCK_PRICE_FAIL,
  payload,
});

export const fetchStockPriceSuccess = (payload) => ({
  type: FETCH_STOCK_PRICE_SUCCESS,
  payload,
});

export const fetchStockPrice = (stocks, symbols) => (dispatch) => {
  const apiUrl = new URL(`${API_URL}/stock/market/batch`);
  apiUrl.searchParams.append('symbols', symbols);
  apiUrl.searchParams.append('types', 'price');
  apiUrl.searchParams.append('token', API_KEY);
  dispatch(fetchStockPriceStart());
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Oops, there\'s something wrong with our app.');
      }
      return response.json();
    })
    .then((response) => {
      dispatch(fetchStockPriceSuccess(response));
      const calculatedValue = stocks
        .map(({ shares, symbol }) => shares * response[symbol].price)
        .reduce((a, b) => a + b);
      dispatch({
        type: FETCH_STOCK_PRICE,
        payload: transferToDollar(round(calculatedValue)),
      });
    })
    .catch((err) => dispatch(fetchStockPriceFail(err)));
};

export const fetchInvestmentsValue = (uid = 1) => (dispatch) => {
  const serverUrl = new URL(`${SERVER_URL}/investments/user/${uid}`);
  dispatch(fetchUserInvestmentSharesStart());
  fetch(serverUrl)
    .then((response) => {
      if (!response.ok) {
        switch (response.status) {
          case 401:
            throw new Error('Sorry, we cannot validate your identity. Please login and try again.');
          default:
            throw new Error('Oops, there\'s something wrong with our app.');
        }
      }
      return response.json();
    })
    .then((response) => {
      dispatch(fetchUserInvestmentSharesSuccess(response));
      const stocks = [...response.stocks];
      const symbols = stocks.map((stock) => stock.symbol);
      dispatch(fetchStockPrice(stocks, symbols));
    })
    .catch((err) => dispatch(fetchUserInvestmentSharesFail(err)));
};
