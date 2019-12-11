import { FETCH_WATCHLIST_SUCCESS, POST_WATCHLIST_SUCCESS, DELETE_WATCHLIST } from './actionType';

const fetchWatchList = () => ({
  type: FETCH_WATCHLIST_SUCCESS,
});

const postWatchList = (payLoad) => ({
  type: POST_WATCHLIST_SUCCESS,
  payLoad,
});

const deleteWatchList = (payLoad) => ({
  type: DELETE_WATCHLIST,
  payLoad,
});

export default {
  fetchWatchList,
  postWatchList,
  deleteWatchList,
};
