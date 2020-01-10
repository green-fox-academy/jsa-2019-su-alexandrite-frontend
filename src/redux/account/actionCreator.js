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

export const addToBalance = (topUp) => (getState, dispatch) => {
  const serverUrl = new URL(`${SERVER_URL}/account/topup`);
  const { accessToken } = getState((state) => state.user);
  dispatch(addToBalanceStart);
  fetch(serverUrl, {
    method: 'POST',
    body: JSON.stringify({ topUp }),
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Oops, there\'s something wrong with our app.');
      }
      return res.json();
    })
    .then((res) => {
      dispatch(addToBalanceSuccess(moneyAmount2String(res.balance)));
    })
    .catch((err) => dispatch(addToBalanceFail(err)));
};
