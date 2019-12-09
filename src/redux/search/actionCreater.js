import { API_KEY, API_URL } from 'react-native-dotenv';

export const SEARCH_START = 'search_start';
export const SEARCH_SUCCESS = 'search_success';
export const SEARCH_FAILED = 'search_failed';

export function searchStart() {
  return {
    type: SEARCH_START,
  };
}

export function searchSuccess(result) {
  return {
    type: SEARCH_SUCCESS,
    payload: result,
  };
}

export function searchFailed(error) {
  return {
    type: SEARCH_FAILED,
    payload: error,
  };
}

export function searchData(input) {
  return (dispatch) => {
    const url = new URL(`${API_URL}/search/${input}`);
    url.searchParams.append('token', API_KEY);
    dispatch(searchStart());
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          switch (response.status) {
            case 404:
              throw new Error(`${response.status}: Resource not found.`);
            case 400:
              throw new Error(`${response.status}: Invalid values were supplied for the API request.`);
            default:
              throw new Error('Oops, there\'s something wrong with our app.');
          }
        }
        return response.json();
      })
      .then((response) => dispatch(searchSuccess(response)))
      .catch((err) => dispatch(searchFailed(err)));
  };
}
