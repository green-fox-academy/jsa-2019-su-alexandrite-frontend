export const FETCH_WATCHLIST_SUCCESS = 'FETCH_WATCHLIST_SUCCESS';
export const POST_WATCHLIST_SUCCESS = 'POST_WATCHLIST_SUCCESS';

const fetchWatchList = () => ({
  type: FETCH_WATCHLIST_SUCCESS,
});

const postWatchList = (name) => ({
  type: POST_WATCHLIST_SUCCESS,
  payLoad: {
    name,
    stocks: [],
  },
});

export default {
  fetchWatchList,
  postWatchList,
};
