import {
  PURCHASE_STOCK_SUCCESS,
  PURCHASE_STOCK_FAIL,
  PURCHASE_STOCK_START,
  PURCHASE_STOCK_RESET,
} from './actionType';

const initialState = {
  error: null,
  isLoading: false,
  result: '',
  isSettled: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PURCHASE_STOCK_START:
      return {
        ...state,
        isLoading: true,
      };
    case PURCHASE_STOCK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        result: 'success',
        isSettled: true,
      };
    case PURCHASE_STOCK_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case PURCHASE_STOCK_RESET:
      return {
        ...state,
        isSettled: false,
      };
    default:
      return state;
  }
};
