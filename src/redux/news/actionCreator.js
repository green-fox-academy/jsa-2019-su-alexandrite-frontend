import {
  SERVER_URL,
} from 'react-native-dotenv';
import {
  FETCH_INVESTED_STOCKS_START,
  FETCH_INVESTED_STOCKS_FAIL,
  FETCH_INVESTED_STOCKS_SUCCESS,
} from './actionType';

export const fetchInvestedStocksStart = () => ({
  type: FETCH_INVESTED_STOCKS_START,
});

export const fetchInvestedStocksFail = (payload) => ({
  type: FETCH_INVESTED_STOCKS_FAIL,
  payload,
});

export const fetchInvestedStocksSuccess = (payload) => ({
  type: FETCH_INVESTED_STOCKS_SUCCESS,
  payload,
});

export const fetchInvestedStocks = () => async (dispatch, getState) => {
  try {
    const serverUrl = new URL(`${SERVER_URL}/investments/user/`);

    const headers = new Headers();
    const { accessToken } = getState().user;
    headers.append('authorization', `Bearer ${accessToken}`);

    dispatch(fetchInvestedStocksStart());
    const investmentsResult = await fetch(serverUrl, { headers });
    if (!investmentsResult.ok) {
      switch (investmentsResult.status) {
        case 401:
          throw new Error('Sorry, we cannot validate your identity. Please login and try again.');
        default:
          throw new Error('Oops, there\'s something wrong with our app.');
      }
    }

    const stocks = await investmentsResult.json();
    const symbols = stocks.map(({ symbol }) => symbol);
    dispatch(fetchInvestedStocksSuccess(
      symbols,
    ));
  } catch (err) {
    dispatch(fetchInvestedStocksFail(err));
  }
};
