import { FETCH_STOCK_DETAILS_START, FETCH_STOCK_DETAILS_SUCCESS, FETCH_STOCK_DETAILS_FAIL } from './actionType';

const initState = {
  loading: false,
  details: undefined,
  error: undefined,
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_STOCK_DETAILS_START:
      return {
        ...initState,
        loading: true,
      };
    case FETCH_STOCK_DETAILS_SUCCESS:
      return {
        ...initState,
        details: action.payload,
      };
    case FETCH_STOCK_DETAILS_FAIL:
      return {
        ...initState,
        error: action.payload,
      };
    default:
      return state;
  }
};
