import { API_URL, API_KEY } from 'react-native-dotenv';

import { FETCH_STOCK_DETAILS_START, FETCH_STOCK_DETAILS_FAIL, FETCH_STOCK_DETAILS_SUCCESS } from './actionType';

const fetchStockDetailsStart = () => ({
  type: FETCH_STOCK_DETAILS_START,
});

const fetchStockDetailsFail = (err) => ({
  type: FETCH_STOCK_DETAILS_FAIL,
  payload: err,
});

const fetchStockDetailsSuccess = (data) => ({
  type: FETCH_STOCK_DETAILS_SUCCESS,
  payload: data,
});

const fetchStockDetails = (symbol) => (dispatch) => {
  const url = new URL(`${API_URL}/stock/${symbol}/advanced-stats`);
  url.searchParams.append('token', API_KEY);
  dispatch(fetchStockDetailsStart());
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        switch (res.status) {
          case 404:
            throw new Error(`The stock ${symbol} you are looking for does not exist.`);
          case 403:
            throw new Error('Permission denied.');
          default:
            throw new Error(res.status);
        }
      }
      return res.json();
    })
    .then((res) => dispatch(fetchStockDetailsSuccess(res)))
    .catch((err) => dispatch(fetchStockDetailsFail(err)));
};

export default {
  fetchStockDetails,
};
