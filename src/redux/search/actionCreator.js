import { API_KEY, API_URL } from 'react-native-dotenv';

import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAILED } from './actionType';

const searchStart = () => ({
  type: SEARCH_START,
});

const searchSuccess = (payload) => ({
  type: SEARCH_SUCCESS,
  payload,
});

const searchFailed = (payload) => ({
  type: SEARCH_FAILED,
  payload,
});

const searchStockData = (input) => (dispatch) => {
  const url = new URL(`${API_URL}/search/${input}`);
  url.searchParams.append('token', API_KEY);
  dispatch(searchStart());
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        switch (response.status) {
          case 404:
            throw new Error(`Unknown symbols were provided when you search for ${input}.`);
          case 400:
            throw new Error(`Invalid values were supplied when search for ${input}.`);
          default:
            throw new Error('Oops, there\'s something wrong with our app.');
        }
      }
      return response.json();
    })
    .then((response) => dispatch(searchSuccess(response)))
    .catch((err) => dispatch(searchFailed(err)));
};

export default {
  searchStockData,
};
