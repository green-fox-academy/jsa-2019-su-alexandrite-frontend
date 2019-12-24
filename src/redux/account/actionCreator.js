import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_SUCCESS,
} from './actionType';

const loginUser = (username, password) => (dispatch) => {
  const LOCAL_URL = 'http://10.72.161.57:3000';
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
      throw new Error('Unexpected status code');
    })
    .then((response) => {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: { username, ...response } });
    })
    .catch((error) => dispatch({ type: LOGIN_USER_FAILURE, payload: error }));
};

export const logOut = () => ({
  type: LOGOUT_SUCCESS,
});


export default loginUser;
