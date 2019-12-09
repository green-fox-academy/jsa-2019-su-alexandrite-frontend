import {
  FETCH_STOCK_DETAILS_START,
  FETCH_STOCK_DETAILS_SUCCESS,
  FETCH_STOCK_DETAILS_FAIL,
  FETCH_HISTORY_CHART_DATA_START,
  FETCH_HISTORY_CHART_DATA_SUCCESS,
  FETCH_HISTORY_CHART_DATA_FAIL,
} from './actionType';

const initState = {
  loadingStockStatsData: false,
  stockStatsData: undefined,
  stockStatsDataError: undefined,
  loadingHistoricalChartData: false,
  historicalData: [],
  timeRange: '6m',
  historicalDataError: undefined,
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_STOCK_DETAILS_START:
      return {
        ...initState,
        loadingStockStatsData: true,
      };
    case FETCH_STOCK_DETAILS_SUCCESS:
      return {
        ...initState,
        stockStatsData: action.payload,
      };
    case FETCH_STOCK_DETAILS_FAIL:
      return {
        ...initState,
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
        historicalData: action.payload,
      };
    case FETCH_HISTORY_CHART_DATA_FAIL:
      return {
        ...state,
        loadingHistoricalChartData: false,
        historicalDataError: action.payload,
        historicalData: [],
      };
    default:
      return state;
  }
};
