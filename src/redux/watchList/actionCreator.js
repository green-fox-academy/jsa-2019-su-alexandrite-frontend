import { FETCH_WATCHLIST_SUCCESS, POST_WATCHLIST_SUCCESS, DELETE_WATCHLIST } from './actionType';

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
