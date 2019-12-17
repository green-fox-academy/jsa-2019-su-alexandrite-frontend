import {
  FETCH_WATCHLIST_SUCCESS,
  POST_WATCHLIST_SUCCESS,
  DELETE_WATCHLIST,
  ADD_STOCK_TO_WATCHLIST,
  REPLACE_WATCHLIST_STOCKS,
  FETCH_WATCHLIST_DETAIL_START,
  FETCH_WATCHLIST_DETAIL_SUCCESS,
} from './actionType';

const initialState = {
  counter: 3,
  watchlists: [],
  loadingWatchlistDetails: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WATCHLIST_SUCCESS:
      return state;
    case POST_WATCHLIST_SUCCESS:
      return {
        ...state,
        counter: state.counter + 1,
        watchlists: [
          ...state.watchlists,
          {
            id: state.counter + 1,
            name: action.payload,
            stocks: [],
          }],
      };
    case DELETE_WATCHLIST:
      return {
        ...state,
        watchlists: state.watchlists.filter((item) => item.id !== action.payload),
      };
    case ADD_STOCK_TO_WATCHLIST:
      return {
        ...state,
        watchlists: state.watchlists.map((watchlist) => (
          watchlist.id === action.payload.watchlistId
            ? ({
              ...watchlist,
              stocks: watchlist.stocks.find((stock) => stock.ticker === action.payload.stock.ticker)
                ? watchlist.stocks
                : [...watchlist.stocks, action.payload.stock],
            })
            : watchlist)),
      };
    case REPLACE_WATCHLIST_STOCKS:
      return {
        ...state,
        watchlists: state.watchlists.map((watchlist) => (
          watchlist.id === action.payload.watchListId
            ? {
              ...watchlist,
              stocks: action.payload.stocks,
            }
            : watchlist)),
      };
    case FETCH_WATCHLIST_DETAIL_START:
      return {
        ...state,
        loadingWatchlistDetails: true,
      };
    case FETCH_WATCHLIST_DETAIL_SUCCESS:
      return {
        ...state,
        loadingWatchlistDetails: false,
        watchlists: state.watchlists.map((wl) => ({
          ...wl,
          stocks: wl.stocks.map(({ ticker }) => ({
            ticker,
            currPrice: action.payload[ticker].quote.latestPrice,
            dailyChange: action.payload[ticker].quote.changePercent,
            volume: action.payload[ticker].quote.volume,
          })),
        })),
      };
    default:
      return state;
  }
};
