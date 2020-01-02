import { FETCH_PORTFOLIO_DETAILS_START, FETCH_PORTFOLIO_DETAILS_FAIL, FETCH_PORTFOLIO_DETAILS_SUCCESS } from './actionType';
import reducer from './reducer';

test('return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    isLoading: false,
    totalValue: 0,
    error: '',
  });
});

test('handle FETCH_PORTFOLIO_DETAILS_START', () => {
  expect(
    reducer([], {
      type: FETCH_PORTFOLIO_DETAILS_START,
    }),
  ).toEqual({
    isLoading: true,
    error: '',
  });
});

test('handle FETCH_PORTFOLIO_DETAILS_SUCCESS', () => {
  expect(
    reducer([], {
      type: FETCH_PORTFOLIO_DETAILS_SUCCESS,
      payload: { totalValue: '80,000' },
    }),
  ).toEqual({
    isLoading: false,
    totalValue: '80,000',
    error: '',
  });
});

test('handle FETCH_PORTFOLIO_DETAILS_FAIL', () => {
  expect(
    reducer([], {
      type: FETCH_PORTFOLIO_DETAILS_FAIL,
      payload: {
        message: ' The error Message',
      },
    }),
  ).toEqual({
    isLoading: false,
    error: {
      message: ' The error Message',
    },
  });
});
