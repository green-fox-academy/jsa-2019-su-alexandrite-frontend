import { FETCH_WATCHLIST_SUCCESS } from './actionCreator';

const initalState = {
  stocks: [
    {
      id: 1,
      stockName: 'MSFT',
      curPrice: 141.21,
      fluctuation: '+0.23%',
      dealAmount: '1.2M',
    },
    {
      id: 2,
      stockName: 'AMZN',
      curPrice: 1208.2,
      fluctuation: '-0.06%',
      dealAmount: '609k',
    },
    {
      id: 3,
      stockName: 'AAPL',
      curPrice: 250.7,
      fluctuation: '+1.63%',
      dealAmount: '810k',
    },
    {
      id: 4,
      stockName: 'FB',
      curPrice: 87.3,
      fluctuation: '+0.81%',
      dealAmount: '430k',
    },
  ],
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case FETCH_WATCHLIST_SUCCESS:
      return state;
    default:
      return state;
  }
}
