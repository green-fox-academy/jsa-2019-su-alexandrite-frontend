import { LOCAL_URL } from 'react-native-dotenv';
import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_SUCCESS,
} from './actionType';

const loginUserSuccess = (payload) => ({
  type: LOGIN_USER_SUCCESS,
  payload,
});

export const loginUserFail = (payload) => ({
  type: LOGIN_USER_FAILURE,
  payload,
});

const loginUser = (username, password) => (dispatch) => {
  const loginURL = `${LOCAL_URL}/users/login`;
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
      throw new Error('Oops! there is something wrong with your app');
    })
    .then((response) => {
      dispatch(loginUserSuccess(response));
    })
    .catch((error) => dispatch(loginUserFail(error)));
};

export const logOut = () => ({
  type: LOGOUT_SUCCESS,
});

export default loginUser;
