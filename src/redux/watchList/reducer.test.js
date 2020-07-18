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
import reducer from './reducer';
import { round, processLargeNumbers } from '../../common/numbers';

test('return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    counter: 3,
    watchlists: [],
    isLoadingWatchlistDetails: false,
    watchlistDetailsError: undefined,
  });
});

test('handle FETCH_WATCHLIST_SUCCESS', () => {
  expect(
    reducer(
      {
        counter: 0,
        watchlists: [],
        isLoadingWatchlistDetails: false,
        watchlistDetailsError: undefined,
      },
      {
        type: FETCH_WATCHLIST_SUCCESS,
      },
    ),
  ).toEqual({
    counter: 0,
    watchlists: [],
    isLoadingWatchlistDetails: false,
    watchlistDetailsError: undefined,
  });
});

test('handle POST_WATCHLIST_SUCCESS', () => {
  expect(
    reducer(
      {
        counter: 1,
        watchlists: [{
          id: 1,
          name: 'first watchlist name',
          stocks: [],
        }],
        isLoadingWatchlistDetails: false,
        watchlistDetailsError: undefined,
      },
      {
        type: POST_WATCHLIST_SUCCESS,
        payload: 'second watchlist name',
      },
    ),
  ).toEqual({
    counter: 2,
    watchlists: [
      {
        id: 1,
        name: 'first watchlist name',
        stocks: [],
      },
      {
        id: 2,
        name: 'second watchlist name',
        stocks: [],
      }],
    isLoadingWatchlistDetails: false,
    watchlistDetailsError: undefined,
  });
});

test('handle DELETE_WATCHLIST', () => {
  expect(
    reducer(
      {
        counter: 1,
        watchlists: [{
          id: 1,
          name: 'the watchlist name',
          stocks: [],
        }],
        isLoadingWatchlistDetails: false,
        watchlistDetailsError: undefined,
      },
      {
        type: DELETE_WATCHLIST,
        payload: 1,
      },
    ),
  ).toEqual({
    counter: 1,
    watchlists: [],
    isLoadingWatchlistDetails: false,
    watchlistDetailsError: undefined,
  });
});

test('handle ADD_STOCK_TO_WATCHLIST without duplicate', () => {
  expect(
    reducer(
      {
        counter: 2,
        watchlists: [
          {
            id: 1,
            name: 'first watchlist name',
            stocks: [
              {
                ticker: 'MSFT',
                currPrice: 0,
                dailyChange: 0,
                volume: '',
              },
            ],
          },
          {
            id: 2,
            name: 'second watchlist name',
            stocks: [],
          },
        ],
        isLoadingWatchlistDetails: false,
        watchlistDetailsError: undefined,
      },
      {
        type: ADD_STOCK_TO_WATCHLIST,
        payload: {
          watchlistId: 1,
          stock: {
            ticker: 'AAPL',
            currPrice: 1,
            dailyChange: 1,
            volume: '',
          },
        },
      },
    ),
  ).toEqual({
    counter: 2,
    watchlists: [
      {
        id: 1,
        name: 'first watchlist name',
        stocks: [
          {
            ticker: 'MSFT',
            currPrice: 0,
            dailyChange: 0,
            volume: '',
          },
          {
            ticker: 'AAPL',
            currPrice: 1,
            dailyChange: 1,
            volume: '',
          },
        ],
      },
      {
        id: 2,
        name: 'second watchlist name',
        stocks: [],
      },
    ],
    isLoadingWatchlistDetails: false,
    watchlistDetailsError: undefined,
  });
});

test('handle ADD_STOCK_TO_WATCHLIST with duplicate', () => {
  expect(
    reducer(
      {
        counter: 2,
        watchlists: [
          {
            id: 1,
            name: 'first watchlist name',
            stocks: [
              {
                ticker: 'MSFT',
                currPrice: 0,
                dailyChange: 0,
                volume: '',
              },
            ],
          },
        ],
        isLoadingWatchlistDetails: false,
        watchlistDetailsError: undefined,
      },
      {
        type: ADD_STOCK_TO_WATCHLIST,
        payload: {
          watchlistId: 1,
          stock: {
            ticker: 'MSFT',
            currPrice: 0,
            dailyChange: 0,
            volume: '',
          },
        },
      },
    ),
  ).toEqual({
    counter: 2,
    watchlists: [
      {
        id: 1,
        name: 'first watchlist name',
        stocks: [
          {
            ticker: 'MSFT',
            currPrice: 0,
            dailyChange: 0,
            volume: '',
          },
        ],
      },
    ],
    isLoadingWatchlistDetails: false,
    watchlistDetailsError: undefined,
  });
});

test('handle REPLACE_WATCHLIST_STOCKS', () => {
  expect(
    reducer(
      {
        counter: 1,
        watchlists: [
          {
            id: 1,
            name: 'first watchlist name',
            stocks: [
              {
                ticker: 'MSFT',
                currPrice: 0,
                dailyChange: 0,
                volume: '',
              },
            ],
          },
          {
            id: 2,
            name: 'second watchlist name',
            stocks: [
              {
                ticker: 'APPL',
                currPrice: 0,
                dailyChange: 0,
                volume: '',
              },
            ],
          },
        ],
        isLoadingWatchlistDetails: false,
        watchlistDetailsError: undefined,
      },
      {
        type: REPLACE_WATCHLIST_STOCKS,
        payload: {
          watchListId: 1,
          stocks: [],
        },
      },
    ),
  ).toEqual({
    counter: 1,
    watchlists: [
      {
        id: 1,
        name: 'first watchlist name',
        stocks: [],
      },
      {
        id: 2,
        name: 'second watchlist name',
        stocks: [
          {
            ticker: 'APPL',
            currPrice: 0,
            dailyChange: 0,
            volume: '',
          },
        ],
      },
    ],
    isLoadingWatchlistDetails: false,
    watchlistDetailsError: undefined,
  });
});

test('handle FETCH_WATCHLIST_DETAILS_START', () => {
  expect(
    reducer([], {
      type: FETCH_WATCHLIST_DETAILS_START,
    }),
  ).toEqual({
    isLoadingWatchlistDetails: true,
  });
});

test('handle FETCH_WATCHLIST_DETAILS_SUCCESS', () => {
  expect(
    reducer(
      {
        counter: 1,
        watchlists: [
          {
            id: 1,
            name: 'first watchlist name',
            stocks: [
              {
                ticker: 'AAPL',
                currPrice: 0,
                dailyChange: 0,
                volume: '',
              },
            ],
          },
        ],
        isLoadingWatchlistDetails: false,
        watchlistDetailsError: undefined,
      },
      {
        type: FETCH_WATCHLIST_DETAILS_SUCCESS,
        payload:
        {
          AAPL:
          {
            quote:
            {
              latestPrice: 301.33,
              changePercent: 0.00764,
              volume: 25708552,
            },
          },
        },
      },
    ),
  ).toEqual({
    counter: 1,
    watchlists: [
      {
        id: 1,
        name: 'first watchlist name',
        stocks: [
          {
            ticker: 'AAPL',
            currPrice: 301.33,
            dailyChange: round(0.00764),
            volume: processLargeNumbers(25708552),
          },
        ],
      },
    ],
    isLoadingWatchlistDetails: false,
    watchlistDetailsError: undefined,
  });
});

test('handle FETCH_WATCHLIST_DETAILS_FAIL', () => {
  expect(
    reducer([], {
      type: FETCH_WATCHLIST_DETAILS_FAIL,
      payload: {
        message: ' The error Message',
      },
    }),
  ).toEqual({
    isLoadingWatchlistDetails: false,
    watchlistDetailsError: {
      message: ' The error Message',
    },
  });
});
