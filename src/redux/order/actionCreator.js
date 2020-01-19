import { SERVER_URL } from 'react-native-dotenv';

import {
  PURCHASE_STOCK_SUCCESS,
  PURCHASE_STOCK_FAIL,
} from './actionType';

const purchaseStockSuccess = (payload) => ({
  type: PURCHASE_STOCK_SUCCESS,
  payload,
});

const purchaseStockFail = (payload) => ({
  type: PURCHASE_STOCK_FAIL,
  error: payload,
});

const purchaseStock = (symbol, shares, type, accessToken) => (dispatch) => {
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
    .then((response) => {
      if (response.status !== 201) {
        switch (response.status) {
          case 401:
            throw new Error('Sorry, we cannot validate your identity. Please login and try again.');
          default:
            throw new Error('Oops! there\'s something wrong with our app.');
        }
      }
      return response.json();
    })
    .then(() => dispatch(purchaseStockSuccess()))
    .catch((error) => dispatch(purchaseStockFail(error.message)));
};

export default purchaseStock;
