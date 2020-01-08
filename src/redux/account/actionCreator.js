<<<<<<< HEAD
import { BACKEND_URL } from 'react-native-dotenv';
import {
  LOGIN_USER_START,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_SUCCESS,
} from './actionType';

const loginUserStart = () => ({
  type: LOGIN_USER_START,
});

const loginUserSuccess = (payload) => ({
  type: LOGIN_USER_SUCCESS,
  payload,
});

export const loginUserFail = (payload) => ({
  type: LOGIN_USER_FAILURE,
  payload,
});

const loginUser = (username, password) => (dispatch) => {
  dispatch(loginUserStart());
  if (username === '') {
    const error = 'username is required';
    dispatch(loginUserFail(error));
  } else if (password === '') {
    const error = 'password is required';
    dispatch(loginUserFail(error));
  } else {
    const loginURL = `${BACKEND_URL}/users/login`;
    fetch(loginURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        if (response.status === 401) {
          throw new Error('Your username or password is incorrect!');
        }
        throw new Error('Oops, there\'s something wrong with our app.');
      })
      .then((response) => {
        dispatch(loginUserSuccess(response));
      })
      .catch((error) => dispatch(loginUserFail(error.message)));
  }
};

export const logOut = () => ({
  type: LOGOUT_SUCCESS,
});

export default loginUser;
=======
import { SERVER_URL } from 'react-native-dotenv';
import {
  ADD_TO_BALANCE_START,
  ADD_TO_BALANCE_SUCCESS,
  ADD_TO_BALANCE_FAIL,
} from './actionType';
import { moneyAmount2String } from '../../common/numbers';

export const addToBalanceStart = () => ({
  type: ADD_TO_BALANCE_START,
});

export const addToBalanceSuccess = (payload) => ({
  type: ADD_TO_BALANCE_SUCCESS,
  payload,
});

export const addToBalanceFail = (payload) => ({
  type: ADD_TO_BALANCE_FAIL,
  payload,
});

export const addToBalance = (topup) => (dispatch) => {
  const serverUrl = new URL(`${SERVER_URL}/account/topup`);
  dispatch(addToBalanceStart);
  fetch(serverUrl, {
    method: 'POST',
    body: JSON.stringify(topup),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Oops, there\'s something wrong with our app.');
      }
      return res.json();
    })
    .then((res) => {
      dispatch(addToBalanceSuccess(moneyAmount2String(res)));
    })
    .catch((err) => dispatch(addToBalanceFail(err)));
};
>>>>>>> 892c6b2... JSAAL-63 top-up frontend
