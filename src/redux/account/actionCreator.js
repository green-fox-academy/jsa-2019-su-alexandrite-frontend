import { SERVER_URL } from 'react-native-dotenv';
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
    const loginURL = `${SERVER_URL}/users/login`;
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

export const logOut = () => ({
  type: LOGOUT_SUCCESS,
});

export default loginUser;
