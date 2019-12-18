import {
  FETCH_USER_INVESTMENT_SHARES_START,
  FETCH_USER_INVESTMENT_SHARES_FAIL,
  FETCH_USER_INVESTMENT_SHARES_SUCCESS,
  FETCH_STOCK_PRICE_START,
  FETCH_STOCK_PRICE_FAIL,
  FETCH_STOCK_PRICE_SUCCESS,
} from './actionType';

const initState = {
  isLoading: false,
  userShares: [],
  price: [],
  error: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_USER_INVESTMENT_SHARES_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case FETCH_USER_INVESTMENT_SHARES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case FETCH_USER_INVESTMENT_SHARES_SUCCESS:
      return {
        ...state,
        userShares: action.payload,
        error: '',
      };
    case FETCH_STOCK_PRICE_START:
      return {
        ...state,
        error: ''
      }
    case FETCH_STOCK_PRICE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    case FETCH_STOCK_PRICE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        price: action.payload,
        error: ''
      }
    default:
      return state;
  }
};
