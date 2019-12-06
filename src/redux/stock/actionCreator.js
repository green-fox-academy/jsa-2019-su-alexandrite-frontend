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

// eslint-disable-next-line import/prefer-default-export
export const fetchStockDetails = (symbol) => (dispatch) => {
  const url = new URL(`${API_URL}/stock/${symbol}/advanced-stats`);
  url.searchParams.append('token', API_KEY);
  dispatch(fetchStockDetailsStart());
  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .then((res) => dispatch(fetchStockDetailsSuccess(res)))
    .catch((err) => dispatch(fetchStockDetailsFail(err)));
};
