import { SERVER_URL } from 'react-native-dotenv';
import {
  LOGIN_USER_START,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_SUCCESS,
  FETCH_USER_PROFILE_START,
  FETCH_USER_PROFILE_FAIL,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_TRANSACTIONS_START,
  FETCH_USER_TRANSACTIONS_FAIL,
  FETCH_USER_TRANSACTIONS_SUCCESS,
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

export const loginUser = (username, password) => (dispatch) => {
  dispatch(loginUserStart());
  if (username === '') {
    const error = 'username is required';
    dispatch(loginUserFail(error));
  } else if (password === '') {
    const error = 'password is required';
    dispatch(loginUserFail(error));
  } else {
    const loginURL = `${SERVER_URL}/user/login`;
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
        dispatch(loginUserSuccess(response.accessToken));
      })
      .catch((error) => dispatch(loginUserFail(error.message)));
  }
};

const fetchUserProfileStart = () => ({
  type: FETCH_USER_PROFILE_START,
});

const fetchUserProfileFail = (payload) => ({
  type: FETCH_USER_PROFILE_FAIL,
  payload,
});

const fetchUserProfileSuccess = (payload) => ({
  type: FETCH_USER_PROFILE_SUCCESS,
  payload,
});

export const fetchUserProfile = () => async (dispatch, getState) => {
  try {
    dispatch(fetchUserProfileStart());
    const { accessToken } = getState().user;
    const url = new URL(`${SERVER_URL}/user/profile`);
    const headers = new Headers();
    headers.append('authorization', `Bearer ${accessToken}`);
    const res = await fetch(url, { headers });
    if (!res.ok) {
      if (res.status === 401) {
        throw new Error('Your username or password is incorrect!');
      }
      throw new Error('Oops, there\'s something wrong with our app.');
    }
    const profile = await res.json();
    dispatch(fetchUserProfileSuccess(profile));
  } catch (error) {
    dispatch(fetchUserProfileFail(error));
  }
};

const fetchUserTransactionsStart = () => ({
  type: FETCH_USER_TRANSACTIONS_START,
});

const fetchUserTransactionsFail = (payload) => ({
  type: FETCH_USER_TRANSACTIONS_FAIL,
  payload,
});

const fetchUserTransactionsSuccess = (payload) => ({
  type: FETCH_USER_TRANSACTIONS_SUCCESS,
  payload,
});

export const fetchUserTransactions = () => async (dispatch, getState) => {
  try {
    dispatch(fetchUserTransactionsStart());
    const { accessToken } = getState().user;
    const url = new URL(`${SERVER_URL}/user/transactions`);
    const headers = new Headers();
    headers.append('authorization', `Bearer ${accessToken}`);
    const res = await fetch(url, { headers });
    if (!res.ok) {
      if (res.status === 401) {
        throw new Error('Your username or password is incorrect!');
      }
      throw new Error('Oops, there\'s something wrong with our app.');
    }
    const profile = await res.json();
    dispatch(fetchUserTransactionsSuccess(profile));
  } catch (error) {
    dispatch(fetchUserTransactionsFail(error));
  }
};


export const logOut = () => ({
  type: LOGOUT_SUCCESS,
});
