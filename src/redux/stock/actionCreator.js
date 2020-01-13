import { SERVER_URL, API_URL, API_KEY } from 'react-native-dotenv';

import {
  FETCH_STOCK_DETAILS_START,
  FETCH_STOCK_DETAILS_FAIL,
  FETCH_STOCK_DETAILS_SUCCESS,
  FETCH_HISTORY_CHART_DATA_START,
  FETCH_HISTORY_CHART_DATA_SUCCESS,
  FETCH_HISTORY_CHART_DATA_FAIL,
  RESET_STOCK_INFO,
  PLACE_ORDER_START,
  PLACE_ORDER_FAIL,
  PLACE_ORDER_SUCCESS,
  PURCHASE_STOCK_SUCCESS,
  PURCHASE_STOCK_FAIL,
} from './actionType';

import chartHelper from '../../common/chartHelper';

const fetchStockDetailsStart = () => ({
  type: FETCH_STOCK_DETAILS_START,
});

const fetchStockDetailsFail = (payload) => ({
  type: FETCH_STOCK_DETAILS_FAIL,
  payload,
});

const fetchStockDetailsSuccess = (payload) => ({
  type: FETCH_STOCK_DETAILS_SUCCESS,
  payload,
});

export const fetchStockDetails = (symbol) => (dispatch) => {
  const url = new URL(`${API_URL}/stock/${symbol}/advanced-stats`);
  url.searchParams.append('token', API_KEY);
  dispatch(fetchStockDetailsStart());
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        switch (res.status) {
          case 404:
            throw new Error(`The stock ${symbol} you are looking for does not exist.`);
          default:
            throw new Error('Oops, there\'s something wrong with our app.');
        }
      }
      return res.json();
    })
    .then((res) => dispatch(fetchStockDetailsSuccess(res)))
    .catch((err) => dispatch(fetchStockDetailsFail(err)));
};

const fetchHistoryChartDataStart = () => ({
  type: FETCH_HISTORY_CHART_DATA_START,
});

const fetchHistoryChartDataFail = (payload) => ({
  type: FETCH_HISTORY_CHART_DATA_FAIL,
  payload,
});


const fetchHistoryChartDataSuccess = (histData, range) => {
  const payload = chartHelper.processChartData(histData, range);

  return {
    type: FETCH_HISTORY_CHART_DATA_SUCCESS,
    payload,
  };
};

export const fetchHistoryChartData = (symbol, range) => (dispatch) => {
  const url = new URL(`${API_URL}/stock/${symbol}/chart/${range}`);
  url.searchParams.append('token', API_KEY);
  url.searchParams.append('chartCloseOnly', true);
  url.searchParams.append('includeToday', true);
  dispatch(fetchHistoryChartDataStart());
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        switch (res.status) {
          case 404:
            throw new Error(`The stock ${symbol} you are looking for does not exist.`);
          default:
            throw new Error('Oops, there\'s something wrong with our app.');
        }
      }
      return res.json();
    })
    .then((res) => {
      dispatch(fetchHistoryChartDataSuccess(res, range));
    })
    .catch((err) => dispatch(fetchHistoryChartDataFail(err)));
};

export const resetStockInfo = () => ({
  type: RESET_STOCK_INFO,
});

const placeOrderStart = () => ({
  type: PLACE_ORDER_START,
});

const placeOrderFail = (payload) => ({
  type: PLACE_ORDER_FAIL,
  payload,
});

const placeOrderSuccess = (payload) => ({
  type: PLACE_ORDER_SUCCESS,
  payload,
});

export const placeOrder = (symbol, shares, type) => async (dispatch, getState) => {
  const url = new URL(`${API_URL}/order`);
  const { accessToken } = getState((state) => state.user);
  url.searchParams.append('token', API_KEY);
  dispatch(placeOrderStart());
  const body = {
    symbol,
    shares,
    type,
  };
  const headers = new Headers();
  headers.append('authorization', `Bearer ${accessToken}`);
  fetch(url, { headers, body })
    .then((res) => {
      if (!res.ok) {
        switch (res.status) {
          case 404:
            throw new Error(`The stock ${symbol} you are looking for does not exist.`);
          default:
            throw new Error('Oops, there\'s something wrong with our app.');
        }
      }
      return res.json();
    })
    .then((res) => dispatch(placeOrderSuccess(res)))
    .catch((err) => dispatch(placeOrderFail(err)));
};

const purchaseStockSuccess = () => ({
  type: PURCHASE_STOCK_SUCCESS,
});

const purchaseStockFail = (payload) => ({
  type: PURCHASE_STOCK_FAIL,
  error: payload,
});

export const purchaseStock = (symbol, shares, type, accessToken) => (dispatch) => {
  const orderUrl = `${SERVER_URL}/order`;
  fetch(orderUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(
      {
        symbol,
        shares,
        type,
      },
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
    .catch((error) => dispatch(purchaseStockFail(error)));
};
