import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import stockReducer from './redux/stock/reducer';

export default createStore(
  combineReducers({
    stock: stockReducer,
  }),
  applyMiddleware(thunk),
);
