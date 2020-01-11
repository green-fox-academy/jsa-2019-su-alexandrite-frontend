import { SERVER_URL, API_URL, API_KEY } from 'react-native-dotenv';
import {
  FETCH_PORTFOLIO_DETAILS_START,
  FETCH_PORTFOLIO_DETAILS_FAIL,
  FETCH_PORTFOLIO_DETAILS_SUCCESS,
  PURCHASE_STOCK_SUCCESS,
  PURCHASE_STOCK_FAIL,
} from './actionType';
import { moneyAmount2String } from '../../common/numbers';

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

export const calculatePortfolioValue = (uid = 1) => (dispatch) => {
  const serverUrl = new URL(`${SERVER_URL}/investments/user/${uid}`);
  dispatch(fetchPortfolioDetailsStart());
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
      const stocks = [...response.stocks];
      const symbols = stocks.map((stock) => stock.symbol);
      const apiUrl = new URL(`${API_URL}/stock/market/batch`);
      apiUrl.searchParams.append('symbols', symbols);
      apiUrl.searchParams.append('types', 'price');
      apiUrl.searchParams.append('token', API_KEY);
      fetch(apiUrl)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Oops, there\'s something wrong with our app.');
          }
          return res.json();
        })
        .then((res) => {
          let totalValue = stocks
            .map(({ shares, symbol }) => shares * res[symbol].price)
            .reduce((a, b) => a + b);
          totalValue = moneyAmount2String((totalValue));
          dispatch(fetchPortfolioDetailsSuccess({
            totalValue,
            stocks,
          }));
        });
    })
    .catch((err) => dispatch(fetchPortfolioDetailsFail(err)));
};

const purchaseStockSuccess = () => ({
  type: PURCHASE_STOCK_SUCCESS,
});

const purchaseStockFail = (payload) => ({
  type: PURCHASE_STOCK_FAIL,
  err: payload,
});

export const purchaseStock = (stockName, shares, transactionBehavior) => (dispatch) => {
  const serverUrl = new URL(`${SERVER_URL}/order`);
  fetch(serverUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(
      stockName,
      shares,
      transactionBehavior,
    ),
  })
    .then((response) => {
      if (response.status !== 201) {
        switch (response.status) {
          case 401:
            throw new Error('Sorry, we cannot validate your identity. Please login and try again.');
          default:
            throw new Error('Oops! there\'s something wrong with our app.');
        }
      }
      return response.json();
    })
    .then((response) => dispatch(purchaseStockSuccess(response.shares)))
    .catch((err) => dispatch(purchaseStockFail(err)));
};
