import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_SUCCESS,
  ADD_TO_BALANCE_START,
  ADD_TO_BALANCE_SUCCESS,
  ADD_TO_BALANCE_FAIL,
} from './actionType';

const initialState = {
  accessToken: '',
  error: '',
  isLoggingIn: false,
  isLoading: false,
  balance: '0.00',
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
    case LOGOUT_SUCCESS:
      return {
        ...state,
        accessToken: null,
        isLoggingIn: false,
        error: null,
      };
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
        balance: action.payload,
        error: '',
      };
    default:
      return state;
  }
};
