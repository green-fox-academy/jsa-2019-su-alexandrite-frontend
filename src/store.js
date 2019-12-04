import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import stockReducer from './redux/stockReducer';

export default createStore(
  combineReducers({
    stock: stockReducer,
  }),
  applyMiddleware(thunk),
);
