
import fetchMock from 'fetch-mock';
import {
  searchStart,
  searchSuccess,
  searchFailed,
} from './actionCreator';
import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAILED } from './actionType';

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
});
