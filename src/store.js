import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import stockReducer from './redux/stock/reducer';
import searchReducer from './redux/search/reducer';
import watchlistsReducer from './redux/watchList/reducer';

export default createStore(
  combineReducers({
    stock: stockReducer,
    search: searchReducer,
    watchlists: watchlistsReducer,
  }),
  applyMiddleware(thunk),
);
