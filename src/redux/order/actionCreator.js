import { SERVER_URL } from 'react-native-dotenv';

import {
  PURCHASE_STOCK_SUCCESS,
  PURCHASE_STOCK_FAIL,
  PURCHASE_STOCK_START,
  PURCHASE_STOCK_RESET,
} from './actionType';

const purchaseStockStart = () => ({
  type: PURCHASE_STOCK_START,
});

const purchaseStockSuccess = (payload) => ({
  type: PURCHASE_STOCK_SUCCESS,
  payload,
});

const purchaseStockFail = (payload) => ({
  type: PURCHASE_STOCK_FAIL,
  payload,
});

export const purchaseStockReset = () => ({
  type: PURCHASE_STOCK_RESET,
});

const purchaseStock = (symbol, shares, type, accessToken) => (dispatch) => {
  dispatch(purchaseStockStart());
  const orderUrl = new URL(`${SERVER_URL}/order`);
  fetch(orderUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(
      {
        symbol,
        shares,
        type,
      },
    ),
  })
    .then(async (response) => {
      if (response.status !== 201) {
        switch (response.status) {
          case 401:
            throw new Error('Sorry, we cannot validate your identity. Please login and try again.');
          case 400:
            throw new Error((await response.json()).message);
          default:
            throw new Error('Oops! there\'s something wrong with our app.');
        }
      }
      return response.json();
    })
    .then(() => dispatch(purchaseStockSuccess()))
    .catch((error) => dispatch(purchaseStockFail(error)));
};

export default purchaseStock;
