import {
  FETCH_USER_INVESTMENT_SHARES_START,
  FETCH_USER_INVESTMENT_SHARES_FAIL,
  FETCH_USER_INVESTMENT_SHARES_SUCCESS,
} from './actionType';

const initState = {
  isLoading: false,
  userShares: [],
  error: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_USER_INVESTMENT_SHARES_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case FETCH_USER_INVESTMENT_SHARES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case FETCH_USER_INVESTMENT_SHARES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userShares: action.payload,
        error: '',
      };
    default:
      return state;
  }
}