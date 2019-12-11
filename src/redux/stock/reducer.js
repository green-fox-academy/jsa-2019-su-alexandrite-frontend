import {
  FETCH_STOCK_DETAILS_START,
  FETCH_STOCK_DETAILS_SUCCESS,
  FETCH_STOCK_DETAILS_FAIL,
  FETCH_HISTORY_CHART_DATA_START,
  FETCH_HISTORY_CHART_DATA_SUCCESS,
  FETCH_HISTORY_CHART_DATA_FAIL,
  RESET_STOCK_INFO,
} from './actionType';

const initState = {
  loadingStockStatsData: false,
  stockStatsData: undefined,
  stockStatsDataError: undefined,
  loadingHistoricalChartData: true,
  historicalData: {
    '1y': { keys: [], data: [] },
    '2y': { keys: [], data: [] },
    '5y': { keys: [], data: [] },
    '6m': { keys: [], data: [] },
    '3m': { keys: [], data: [] },
    '1m': { keys: [], data: [] },
  },
  historicalDataMax: 0,
  historicalDataError: undefined,
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_STOCK_DETAILS_START:
      return {
        ...state,
        loadingStockStatsData: true,
      };
    case FETCH_STOCK_DETAILS_SUCCESS:
      return {
        ...state,
        loadingStockStatsData: false,
        stockStatsData: action.payload,
      };
    case FETCH_STOCK_DETAILS_FAIL:
      return {
        ...state,
        loadingStockStatsData: false,
        stockStatsDataError: action.payload,
      };
    case FETCH_HISTORY_CHART_DATA_START:
      return {
        ...state,
        loadingHistoricalChartData: true,
        historicalData: [],
        historicalDataError: undefined,
      };
    case FETCH_HISTORY_CHART_DATA_SUCCESS:
      return {
        ...state,
        loadingHistoricalChartData: false,
        historicalDataError: undefined,
        historicalData: {
          ...state.historicalData,
          ...action.payload,
        },
      };
    case FETCH_HISTORY_CHART_DATA_FAIL:
      return {
        ...state,
        loadingHistoricalChartData: false,
        historicalDataError: action.payload,
        historicalData: undefined,
      };
    case RESET_STOCK_INFO:
      return initState;
    default:
      return state;
  }
};
