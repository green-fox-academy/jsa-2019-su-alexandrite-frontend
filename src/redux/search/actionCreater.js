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
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((response) => dispatch(searchSuccess(response)))
      .catch((err) => dispatch(searchFailed(err)));
  };
}
