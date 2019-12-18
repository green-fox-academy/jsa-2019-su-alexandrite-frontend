import { SERVER_URL } from 'react-native-dotenv';
import {
  FETCH_USER_INVESTMENT_SHARES_START,
  fetchUserInvestmentSharesFail,
  fetchUserInvestmentSharesSuccess,
} from './actionType';

export const fetchUserInvestmentSharesStart = () => ({
  type: FETCH_USER_INVESTMENT_SHARES_START,
});

export const fetchUserInvestmentSharesFail = (payload) => ({
  type: FETCH_USER_INVESTMENT_SHARES_FAIL,
  payload,
});

export const fetchUserInvestmentSharesSuccess = (payload) => ({
  type: FETCH_USER_INVESTMENT_SHARES_SUCCESS,
  payload,
});

export const fetchUserInvestmentShares = (uid) => (dispatch) => {
  const url = new URL(`${SERVER_URL}/investments/${uid}`);
  dispatch(fetchUserInvestmentSharesStart());
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        switch (response.status) {
          case 401:
            throw new Error('Sorry, you are unauthorized for this page, please log in again.');
          default:
            throw new Error('Oops, there\'s something wrong with our app.');
        }
      }
      return response.json();
    })
    .then((response) => dispatch(fetchUserInvestmentSharesSuccess(response)))
    .catch((err) => dispatch(fetchUserInvestmentSharesFail(err)));
};
