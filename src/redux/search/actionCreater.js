export const START_FETCH = 'start';
export const FETCH_DATA = 'fetch';
export const FETCH_SUCCESS = 'success';
export const FETCH_FAILED = 'failed';

const URL = process.env.API_URL;
const KEY = process.env.API_KEY;

export function startFetch() {
  return {
    type: START_FETCH,
  };
}

export function fetchSuccess(result) {
  return {
    type: FETCH_SUCCESS,
    payload: result,
  };
}

export function fetchFailed(error) {
  return {
    type: FETCH_FAILED,
    payload: error,
  };
}

export function fetchData(input) {
  return (dispatch) => {
    fetch(`${URL}/search/${input}?token=T${KEY}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((response) => dispatch(fetchSuccess(response)))
      .catch((err) => dispatch(fetchFailed(err)));
  };
}
