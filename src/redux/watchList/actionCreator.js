export const FETCH_WATCHLIST_SUCCESS = 'FETCH_WATCHLIST_SUCCESS';
export const POST_WATCHLIST_SUCCESS = 'POST_WATCHLIST_SUCCESS';

export function fetchWatchList() {
  return {
    type: FETCH_WATCHLIST_SUCCESS,
  };
}

export function postWatchList(watchListItem) {
  return {
    type: POST_WATCHLIST_SUCCESS,
    payLoad: {
      id: 100,
      name: watchListItem,
      stocks: [],
    },
  };
}
