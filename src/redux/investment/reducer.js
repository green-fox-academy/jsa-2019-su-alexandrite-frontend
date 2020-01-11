import {
  FETCH_PORTFOLIO_DETAILS_START,
  FETCH_PORTFOLIO_DETAILS_FAIL,
  FETCH_PORTFOLIO_DETAILS_SUCCESS,
  PURCHASE_STOCK_SUCCESS,
  PURCHASE_STOCK_FAIL,
} from './actionType';

const initState = {
  isLoading: false,
  totalValue: 0,
  error: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_PORTFOLIO_DETAILS_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case FETCH_PORTFOLIO_DETAILS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case FETCH_PORTFOLIO_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ...action.payload,
        error: '',
      };
    case PURCHASE_STOCK_SUCCESS:
      return {
        ...state,
        totalValue: action.payload, // need to multiply by stock price
      };
    case PURCHASE_STOCK_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
