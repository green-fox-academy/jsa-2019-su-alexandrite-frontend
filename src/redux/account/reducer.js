import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_SUCCESS,
} from './actionType';

const initialState = {
  accessToken: '',
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_START:
      return {
        ...state,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        accessToken: null,
      };
    default:
      return state;
  }
};
