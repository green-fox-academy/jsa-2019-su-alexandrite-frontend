import {
  FETCH_INVESTED_STOCKS_START,
  FETCH_INVESTED_STOCKS_FAIL,
  FETCH_INVESTED_STOCKS_SUCCESS,
} from './actionType';

const initState = {
  isLoading: false,
  symbols: [],
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_INVESTED_STOCKS_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case FETCH_INVESTED_STOCKS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case FETCH_INVESTED_STOCKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        symbols: action.payload,
      };
    default:
      return state;
  }
};
