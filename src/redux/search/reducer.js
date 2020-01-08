import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAILED } from './actionType';

const initState = {
  isLoading: false,
  result: [],
  error: '',
  touched: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case SEARCH_START:
      return {
        ...state,
        isLoading: true,
        error: '',
        touched: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        result: action.payload,
        error: '',
      };
    case SEARCH_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
