import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAILED } from './actionCreater';

const initState = {
  isloading: false,
  result: [],
  error: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case SEARCH_START:
      return {
        ...state,
        isloading: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        isloading: false,
        result: action.payload,
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
