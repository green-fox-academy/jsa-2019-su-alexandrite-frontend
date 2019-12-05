import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import stockReducer from './redux/stockReducer';
import watchlistsReducer from './redux/watchList/reducer';

export default createStore(
  combineReducers({
    stock: stockReducer,
    watchlists: watchlistsReducer,
  }),
  applyMiddleware(thunk),
);
