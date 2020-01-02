import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { searchStart, searchSuccess, searchFailed, searchStockData } from './actionCreator';
import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAILED } from './actionType';

test('trigger action searchStart to get expected result', () => {
  const result = {
    type: SEARCH_START,
  };
  expect(searchStart()).toEqual(result);
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('trigger action searchSuccess to get expected result', () => {
  const result = {
    type: SEARCH_SUCCESS,
    payload: [{
      symbol: 'MSFT',
      securityName: 'oso rprtCifcnotMiaroo',
      securityType: 'sc',
      region: 'US',
      exchange: 'ANS',
    }],
  };
  expect(searchSuccess([{
    symbol: 'MSFT',
    securityName: 'oso rprtCifcnotMiaroo',
    securityType: 'sc',
    region: 'US',
    exchange: 'ANS',
  }])).toEqual(result);
});

test('trigger action searchFailed to get expected result', () => {
  const result = {
    type: SEARCH_FAILED,
    payload: {
      message: 'The error message',
    },
  };
  expect(searchFailed({ message: 'The error message' })).toEqual(result);
});

test('get error message when fetching fails', () => {
  fetchMock.getOnce('/search/MSFT?token=Tsk_123', {
    body: {
      payload: [{
        symbol: 'MSFT',
        securityName: 'oso rprtCifcnotMiaroo',
        securityType: 'sc',
        region: 'US',
        exchange: 'ANS',
      }],
    },
  });

  const expectedActions = [
    { type: SEARCH_START },
    {
      type: SEARCH_SUCCESS,
      payload: [{
        symbol: 'MSFT',
        securityName: 'oso rprtCifcnotMiaroo',
        securityType: 'sc',
        region: 'US',
        exchange: 'ANS',
      }],
    },
  ];
  const store = mockStore({ searchReducer: [] });
  store.dispatch(searchStockData('MSFT'));
  expect(store.getActions()).toEqual(expectedActions);
});
