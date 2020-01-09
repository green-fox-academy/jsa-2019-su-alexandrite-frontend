import { API_URL, API_KEY } from 'react-native-dotenv';

import {
  FETCH_STOCK_DETAILS_START,
  FETCH_STOCK_DETAILS_FAIL,
  FETCH_STOCK_DETAILS_SUCCESS,
  FETCH_HISTORY_CHART_DATA_START,
  FETCH_HISTORY_CHART_DATA_SUCCESS,
  FETCH_HISTORY_CHART_DATA_FAIL,
  RESET_STOCK_INFO,
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
