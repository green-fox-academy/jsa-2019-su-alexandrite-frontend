import { API_URL, API_KEY } from 'react-native-dotenv';
import {
  FETCH_WATCHLIST_SUCCESS,
  POST_WATCHLIST_SUCCESS,
  DELETE_WATCHLIST,
  ADD_STOCK_TO_WATCHLIST,
  REPLACE_WATCHLIST_STOCKS,
  FETCH_WATCHLIST_DETAILS_FAIL,
  FETCH_WATCHLIST_DETAILS_START,
  FETCH_WATCHLIST_DETAILS_SUCCESS,
} from './actionType';


export const DELETE_STOCK_IN_WATCHLIST = 'DELETE_STOCK_IN_WATCHLIST';

export const fetchWatchList = () => ({
  type: FETCH_WATCHLIST_SUCCESS,
});

export const postWatchList = (payload) => ({
  type: POST_WATCHLIST_SUCCESS,
  payload,
});

export const deleteWatchList = (payload) => ({
  type: DELETE_WATCHLIST,
  payload,
});

export const replaceWatchlistStocks = (watchListId, stocks) => ({
  type: REPLACE_WATCHLIST_STOCKS,
  payload: {
    watchListId,
    stocks,
  },
});

const fetchWatchlistDetailsStart = () => ({
  type: FETCH_WATCHLIST_DETAILS_START,
});

const fetchWatchlistDetailsSuccess = (payload) => ({
  type: FETCH_WATCHLIST_DETAILS_SUCCESS,
  payload,
});

const fetchWatchlistDetailsFail = (payload) => ({
  type: FETCH_WATCHLIST_DETAILS_FAIL,
  payload,
});

export const fetchWatchlistDetails = (symbols) => (dispatch) => {
  const url = new URL(`${API_URL}/stock/market/batch`);
  url.searchParams.append('token', API_KEY);
  url.searchParams.append('symbols', symbols);
  url.searchParams.append('types', 'quote');
  url.searchParams.append('displayPercent', true);
  dispatch(fetchWatchlistDetailsStart());
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        switch (res.status) {
          case 404:
            throw new Error(`The stock ${symbols} you are looking for does not exist.`);
          default:
            throw new Error('Oops, there\'s something wrong with our app.');
        }
      }
      return res.json();
    })
    .then((res) => {
      dispatch(fetchWatchlistDetailsSuccess(res));
    })
    .catch((err) => dispatch(fetchWatchlistDetailsFail(err)));
};

export const addStockToWatchlist = (watchlistId, ticker) => (dispatch) => {
  dispatch({
    type: ADD_STOCK_TO_WATCHLIST,
    payload: {
      watchlistId,
      stock: {
        ticker,
        currPrice: 0,
        dailyChange: 0,
        volume: '',
      },
    },
  });
  dispatch(fetchWatchlistDetails(ticker));
};
