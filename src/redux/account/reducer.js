import {
<<<<<<< HEAD
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
=======
  ADD_TO_BALANCE_START,
  ADD_TO_BALANCE_SUCCESS,
  ADD_TO_BALANCE_FAIL,
} from './actionType';

const initState = {
  isLoading: false,
  balance: '0.00',
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
>>>>>>> 892c6b2... JSAAL-63 top-up frontend
      };
    default:
      return state;
  }
};
