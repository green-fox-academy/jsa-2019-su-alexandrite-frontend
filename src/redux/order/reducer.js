import {
  PURCHASE_STOCK_SUCCESS,
  PURCHASE_STOCK_FAIL,
} from './actionType';

const initialState = {
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PURCHASE_STOCK_SUCCESS:
      return {
        ...state,
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
