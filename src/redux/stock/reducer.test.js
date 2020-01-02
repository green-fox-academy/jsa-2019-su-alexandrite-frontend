import {
  FETCH_STOCK_DETAILS_START,
  FETCH_STOCK_DETAILS_SUCCESS,
  FETCH_STOCK_DETAILS_FAIL,
  FETCH_HISTORY_CHART_DATA_START,
  FETCH_HISTORY_CHART_DATA_SUCCESS,
  FETCH_HISTORY_CHART_DATA_FAIL,
  RESET_STOCK_INFO,
} from './actionType';
import reducer from './reducer';

test('return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    isLoadingStockStatsData: false,
    stockStatsData: undefined,
    stockStatsDataError: undefined,
    isLoadingHistoricalChartData: true,
    historicalData: undefined,
    historicalDataError: undefined,
  });
});

test('handle FETCH_STOCK_DETAILS_START', () => {
  expect(
    reducer([], {
      type: FETCH_STOCK_DETAILS_START,
    }),
  ).toEqual({
    isLoadingStockStatsData: true,
  });
});

test('handle FETCH_STOCK_DETAILS_SUCCESS', () => {
  expect(
    reducer([], {
      type: FETCH_STOCK_DETAILS_SUCCESS,
      payload: {
        AAPL: {
          week52high: 305.99,
          week52low: 146,
          ttmEPS: 12.0887,
          peRatio: 24.67,
          nextDividendDate: null,
          dividendYield: 0.010659831714073139,
          totalCash: 101151091649,
          currentDebt: 16534810133,
          revenue: 268877809378,
          revenuePerShare: 58.9,
          EBITDA: 78123178687,
        },
      },
    }),
  ).toEqual({
    isLoadingStockStatsData: false,
    stockStatsData: {
      AAPL: {
        week52high: 305.99,
        week52low: 146,
        ttmEPS: 12.0887,
        peRatio: 24.67,
        nextDividendDate: null,
        dividendYield: 0.010659831714073139,
        totalCash: 101151091649,
        currentDebt: 16534810133,
        revenue: 268877809378,
        revenuePerShare: 58.9,
        EBITDA: 78123178687,
      },
    },
  });
});

test('handle FETCH_STOCK_DETAILS_FAIL', () => {
  expect(
    reducer([], {
      type: FETCH_STOCK_DETAILS_FAIL,
      payload: {
        message: ' The error Message',
      },
    }),
  ).toEqual({
    isLoadingStockStatsData: false,
    stockStatsDataError: {
      message: ' The error Message',
    },
  });
});

test('handle FETCH_HISTORY_CHART_DATA_START', () => {
  expect(
    reducer([], {
      type: FETCH_HISTORY_CHART_DATA_START,
    }),
  ).toEqual({
    isLoadingHistoricalChartData: true,
    historicalDataError: undefined,
  });
});

test('handle FETCH_HISTORY_CHART_DATA_SUCCESS', () => {
  expect(
    reducer([], {
      type: FETCH_HISTORY_CHART_DATA_SUCCESS,
      payload: {
        0: {
          date: '2019-12-02',
          open: 31.77,
          close: 31.59,
          high: 31.05,
          low: 30.16,
          volume: 14736679,
          uOpen: 31.24,
          uClose: 31.22,
          uHigh: 31.63,
          uLow: 30.1,
          uVolume: 15035884,
          change: 0,
          changePercent: 0,
          label: 'Dec 2',
          changeOverTime: 0,
        },
        1: {
          date: '2019-12-03',
          open: 31.12,
          close: 30.17,
          high: 30.53,
          low: 30.27,
          volume: 16670364,
          uOpen: 30.5,
          uClose: 30.55,
          uHigh: 31.2,
          uLow: 30.23,
          uVolume: 17315779,
          change: -0.46,
          changePercent: -1.4811,
          label: 'Dec 3',
          changeOverTime: -0.01533,
        },
      },
    }),
  ).toEqual({
    isLoadingHistoricalChartData: false,
    historicalData: {
      0: {
        date: '2019-12-02',
        open: 31.77,
        close: 31.59,
        high: 31.05,
        low: 30.16,
        volume: 14736679,
        uOpen: 31.24,
        uClose: 31.22,
        uHigh: 31.63,
        uLow: 30.1,
        uVolume: 15035884,
        change: 0,
        changePercent: 0,
        label: 'Dec 2',
        changeOverTime: 0,
      },
      1: {
        date: '2019-12-03',
        open: 31.12,
        close: 30.17,
        high: 30.53,
        low: 30.27,
        volume: 16670364,
        uOpen: 30.5,
        uClose: 30.55,
        uHigh: 31.2,
        uLow: 30.23,
        uVolume: 17315779,
        change: -0.46,
        changePercent: -1.4811,
        label: 'Dec 3',
        changeOverTime: -0.01533,
      },
    },
  });
});

test('handle FETCH_HISTORY_CHART_DATA_FAIL', () => {
  expect(
    reducer([], {
      type: FETCH_HISTORY_CHART_DATA_FAIL,
      payload: {
        message: ' The error Message',
      },
    }),
  ).toEqual({
    isLoadingHistoricalChartData: false,
    historicalDataError: {
      message: ' The error Message',
    },
  });
});

test('handle RESET_STOCK_INFO', () => {
  expect(
    reducer([], {
      type: RESET_STOCK_INFO,
    }),
  ).toEqual({
    isLoadingStockStatsData: false,
    stockStatsData: undefined,
    stockStatsDataError: undefined,
    isLoadingHistoricalChartData: true,
    historicalData: undefined,
    historicalDataError: undefined,
  });
});
