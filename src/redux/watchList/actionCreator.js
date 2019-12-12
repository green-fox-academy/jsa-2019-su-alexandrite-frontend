import {
  FETCH_WATCHLIST_SUCCESS,
  POST_WATCHLIST_SUCCESS,
  DELETE_WATCHLIST,
  ADD_STOCK_TO_WATCHLIST,
} from './actionType';


export const DELETE_WATCHLIST_ITEM = 'DELETE_WATCHLIST_ITEM';

export const fetchWatchList = () => ({
  type: FETCH_WATCHLIST_SUCCESS,
});

export const postWatchList = (payLoad) => ({
  type: POST_WATCHLIST_SUCCESS,
  payLoad,
});

export const deleteWatchList = (payLoad) => ({
  type: DELETE_WATCHLIST,
  payLoad,
});

export const addStockToWatchlist = (watchlistId, ticker) => ({
  type: ADD_STOCK_TO_WATCHLIST,
  payLoad: {
    watchlistId,
    stock: {
      ticker,
      // to suppress the warning, will be removed after watchlist data story
      currPrice: 0,
      dailyChange: 0,
      volumn: '0',
    },
  },
});

export const deleteWatchListItem = (payLoad) => ({
  type: DELETE_WATCHLIST_ITEM,
  payLoad,
});
