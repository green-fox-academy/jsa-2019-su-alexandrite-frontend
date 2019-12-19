import {
  FETCH_WATCHLIST_SUCCESS,
  POST_WATCHLIST_SUCCESS,
  DELETE_WATCHLIST,
  ADD_STOCK_TO_WATCHLIST,
  REPLACE_WATCHLIST_STOCKS,
  FETCH_WATCHLIST_DETAILS_START,
  FETCH_WATCHLIST_DETAILS_SUCCESS,
  FETCH_WATCHLIST_DETAILS_FAIL,
} from './actionType';

import { round, processLargeNumbers } from '../../common/numbers';

const initialState = {
  counter: 3,
  watchlists: [],
  isLoadingWatchlistDetails: false,
  hasWatchlistDetailsError: undefined,
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
    case FETCH_WATCHLIST_DETAILS_START:
      return {
        ...state,
        isLoadingWatchlistDetails: true,
      };
    case FETCH_WATCHLIST_DETAILS_SUCCESS:
      return {
        ...state,
        isLoadingWatchlistDetails: false,
        hasWatchlistDetailsError: undefined,
        watchlists: state.watchlists.map((wl) => ({
          ...wl,
          stocks: wl.stocks.map(({ ticker, ...rest }) => ({
            ...rest,
            ticker,
            ...(action.payload[ticker] && {
              currPrice: action.payload[ticker].quote.latestPrice,
              dailyChange: round(action.payload[ticker].quote.changePercent),
              volume: processLargeNumbers(action.payload[ticker].quote.volume),
            }),
          })),
        })),
      };
    case FETCH_WATCHLIST_DETAILS_FAIL:
      return {
        ...state,
        isLoadingWatchlistDetails: false,
        hasWatchlistDetailsError: action.payload,
      };
    default:
      return state;
  }
};
