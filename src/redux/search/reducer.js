import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAILED } from './actionType';

const initState = {
  isloading: false,
  result: [],
  error: '',
  touched: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case SEARCH_START:
      return {
        ...state,
        isloading: true,
        error: '',
        touched: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        isloading: false,
        result: action.payload,
        error: '',
      };
    case SEARCH_FAILED:
      return {
        ...state,
        isloading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
