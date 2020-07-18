import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAILED } from './actionType';
import reducer from './reducer';

test('return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    isLoading: false,
    result: [],
    error: '',
    touched: false,
  });
});

test('handle SEARCH_START', () => {
  expect(
    reducer([], {
      type: SEARCH_START,
    }),
  ).toEqual({
    isLoading: true,
    error: '',
    touched: true,
  });
});

test('handle SEARCH_SUCCESS', () => {
  expect(
    reducer([], {
      type: SEARCH_SUCCESS,
      payload: {
        symbol: 'MSFT',
        securityName: 'oso rprtCifcnotMiaroo',
        securityType: 'sc',
        region: 'US',
        exchange: 'ANS',
      },
    }),
  ).toEqual({
    isLoading: false,
    result: {
      symbol: 'MSFT',
      securityName: 'oso rprtCifcnotMiaroo',
      securityType: 'sc',
      region: 'US',
      exchange: 'ANS',
    },
    error: '',
  });
});

test('handle SEARCH_FAILED', () => {
  expect(
    reducer([], {
      type: SEARCH_FAILED,
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
