import { FETCH_WATCHLIST_SUCCESS, POST_WATCHLIST_SUCCESS, DELETE_WATCHLIST } from './actionType';

const watchlist1 = {
  id: 1,
  name: 'A share',
  stocks: [
    {
      id: 1,
      ticker: 'MSFT',
      currPrice: 141.21,
      dailyChange: 0.23,
      volumn: '1.2M',
    },
    {
      id: 2,
      ticker: 'AMZN',
      currPrice: 1208.2,
      dailyChange: -0.06,
      volumn: '609k',
    },
    {
      id: 3,
      ticker: 'AAPL',
      currPrice: 250.7,
      dailyChange: 1.63,
      volumn: '810k',
    },
    {
      id: 4,
      ticker: 'FB',
      currPrice: 87.3,
      dailyChange: 0.81,
      volumn: '430k',
    },
  ],
};

const watchlist2 = {
  id: 2,
  name: 'NSDQ',
  stocks: [],
};

const initalState = {
  counter: 3,
  watchlists: [watchlist1, watchlist2],
};

export default (state = initalState, action) => {
  switch (action.type) {
    case FETCH_WATCHLIST_SUCCESS:
      return state;
    case POST_WATCHLIST_SUCCESS:
      return {
        ...state,
        counter: state.counter + 1,
        watchlists: [
          ...state.watchlists,
          {
            id: state.counter + 1,
            name: action.payLoad,
            stocks: [],
          }],
      };
    case DELETE_WATCHLIST:
      return {
        watchlists: state.watchlists.filter((item) => item.id !== action.payLoad),
      };
    default:
      return state;
  }
};
