import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_SUCCESS,
} from './actionType';

const initialState = {
  accessToken: '',
  error: '',
  isLoggingIn: false,
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
    default:
      return state;
  }
};
