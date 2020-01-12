import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_SUCCESS,
  FETCH_USER_PROFILE_START,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAIL,
  FETCH_USER_TRANSACTIONS_START,
  FETCH_USER_TRANSACTIONS_SUCCESS,
  FETCH_USER_TRANSACTIONS_FAIL,
} from './actionType';

const initialState = {
  accessToken: '',
  error: '',
  isLoggingIn: false,
  isLoadingUserProfile: false,
  profileError: null,
  username: null,
  balance: null,
  isLoadingTransactions: false,
  transactions: [],
  transactionsError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_START:
      return {
        ...state,
        isLoggingIn: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        accessToken: action.payload,
        isLoggingIn: false,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoggingIn: false,
      };
    case FETCH_USER_PROFILE_START:
      return {
        ...state,
        isLoadingUserProfile: true,
      };
    case FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isLoadingUserProfile: false,
        ...action.payload,
      };
    case FETCH_USER_PROFILE_FAIL:
      return {
        ...state,
        profileError: action.payload,
        isLoadingUserProfile: false,
      };
    case FETCH_USER_TRANSACTIONS_START:
      return {
        ...state,
        isLoadingTransactions: true,
        transactionsError: null,
      };
    case FETCH_USER_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        isLoadingTransactions: false,
        transactions: action.payload,
      };
    case FETCH_USER_TRANSACTIONS_FAIL:
      return {
        ...state,
        transactionsError: action.payload,
        isLoadingTransactions: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        accessToken: null,
        isLoggingIn: false,
        error: null,
      };
    default:
      return state;
  }
};
