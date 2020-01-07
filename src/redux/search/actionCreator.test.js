// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  searchStart,
  searchSuccess,
  searchFailed,
  // searchStockData,
} from './actionCreator';
import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAILED } from './actionType';

// jest.mock('./__mocks__/.env');

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('trigger action searchStart to get expected result', () => {
    const result = {
      type: SEARCH_START,
    };
    expect(searchStart()).toEqual(result);
  });

  it('trigger action searchSuccess to get expected result', () => {
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

  it('trigger action searchFailed to get expected result', () => {
    const result = {
      type: SEARCH_FAILED,
      payload: {
        message: 'The error message',
      },
    };
    expect(searchFailed({ message: 'The error message' })).toEqual(result);
  });

  // it('creates SEARCH_SUCCESS when fetching has been done', () => {
  //   const URL = 'https://sandbox.iexapis.com/stable/search/MSFT?Token=Tsk_1234567890';
  //   fetchMock.getOnce(URL, {
  //     body: {
  //       payload: [{
  //         symbol: 'MSFT',
  //         securityName: 'oso rprtCifcnotMiaroo',
  //         securityType: 'sc',
  //         region: 'US',
  //         exchange: 'ANS',
  //       }],
  //     },
  //   });

  //   const expectedActions = [
  //     { type: SEARCH_START },
  //     {
  //       type: SEARCH_SUCCESS,
  //       payload: [{
  //         symbol: 'MSFT',
  //         securityName: 'oso rprtCifcnotMiaroo',
  //         securityType: 'sc',
  //         region: 'US',
  //         exchange: 'ANS',
  //       }],
  //     },
  //   ];
  //   const store = mockStore();
  //   store.dispatch(searchStockData('MSFT'));
  //   expect(store.getActions()).toEqual(expectedActions);
  // });
});
