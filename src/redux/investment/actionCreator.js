import { SERVER_URL, API_URL, API_KEY } from 'react-native-dotenv';
import {
  FETCH_USER_INVESTMENT_SHARES_START,
  FETCH_USER_INVESTMENT_SHARES_FAIL,
  FETCH_USER_INVESTMENT_SHARES_SUCCESS,
  FETCH_STOCK_PRICE_START,
  FETCH_STOCK_PRICE_FAIL,
  FETCH_STOCK_PRICE_SUCCESS,
} from './actionType';

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

export const fetchUserInvestmentShares = (uid) => (dispatch) => {
  const serverUrl = new URL(`${SERVER_URL}/investments/user/${uid}`);
  dispatch(fetchUserInvestmentSharesStart());
  fetch(serverUrl)
    .then((response) => {
      if (!response.ok) {
        switch (response.status) {
          case 401:
            throw new Error('Sorry, you are unauthorized for this page, please log in again.');
          default:
            throw new Error('Oops, there\'s something wrong with our app.');
        }
      }
      return response.json();
    })
    .then((response) => dispatch(fetchUserInvestmentSharesSuccess(response)))
    .catch((err) => dispatch(fetchUserInvestmentSharesFail(err)));
};

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

export const fetchStockPrice = (symbols) => (dispatch) => {
  const apiUrl = new URL(`${API_URL}/stock/market/batch`);
  apiUrl.searchParams.append('symbols', symbols);
  apiUrl.searchParams.append('types', 'price');
  apiUrl.searchParams.append('token', API_KEY);
  dispatch(fetchStockPriceStart());
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        switch (response.status) {
          case 404:
            throw new Error('The symbols of stocks you invested could not be found.');
          default:
            throw new Error('Oops, there\'s something wrong with our app.');
        }
      }
      return response.json();
    })
    .then((response) => dispatch(fetchStockPriceSuccess(response)))
    .catch((err) => dispatch(fetchStockPriceFail(err)));
};
