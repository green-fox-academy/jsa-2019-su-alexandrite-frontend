import {
  ADD_TO_BALANCE_START,
  ADD_TO_BALANCE_SUCCESS,
  ADD_TO_BALANCE_FAIL,
} from './actionType';

const initState = {
  isLoading: false,
  balance: '',
  error: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_BALANCE_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case ADD_TO_BALANCE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ADD_TO_BALANCE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ...action.payload,
        error: '',
      };
    default:
      return state;
  }
};
