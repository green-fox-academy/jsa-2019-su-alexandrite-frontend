import { FETCH_STOCK_DETAILS_START, FETCH_STOCK_DETAILS_SUCCESS, FETCH_STOCK_DETAILS_FAIL } from './actionType';

const initState = {
  loading: true,
  details: {},
  error: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_STOCK_DETAILS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_STOCK_DETAILS_SUCCESS:
      return {
        ...state,
        details: action.payload,
      };
    case FETCH_STOCK_DETAILS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
