import { START_FETCH, FETCH_SUCCESS, FETCH_FAILED } from './actionCreater';

const initState = {
  isloading: false,
  result: [],
  error: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case START_FETCH:
      return {
        ...state,
        isloading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isloading: false,
        result: action.payload,
      };
    case FETCH_FAILED:
      alert(action.payload)
      return {
        ...state,
        isloading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
