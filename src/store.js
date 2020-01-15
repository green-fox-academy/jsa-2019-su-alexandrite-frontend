import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import thunk from 'redux-thunk';
import accountReducer from './redux/account/reducer';
import stockReducer from './redux/stock/reducer';
import searchReducer from './redux/search/reducer';
import watchlistsReducer from './redux/watchList/reducer';
import invsetmentsReducer from './redux/investment/reducer';
import newsReducer from './redux/news/reducer';
import ordersReducer from './redux/order/reducer';

const reducer = combineReducers({
  user: accountReducer,
  stock: stockReducer,
  search: searchReducer,
  watchlists: watchlistsReducer,
  investments: invsetmentsReducer,
  news: newsReducer,
  orders: ordersReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['watchlists', 'user'],
};

const pReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  pReducer,
  applyMiddleware(thunk),
);

export const persistor = persistStore(store);
