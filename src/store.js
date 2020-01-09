import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import thunk from 'redux-thunk';
import accountReducer from './redux/account/reducer';
import stockReducer from './redux/stock/reducer';
import searchReducer from './redux/search/reducer';
import watchlistsReducer from './redux/watchList/reducer';
import accountReducer from './redux/account/reducer';
import invsetmentsReducer from './redux/investment/reducer';

const reducer = combineReducers({
  user: accountReducer,
  stock: stockReducer,
  search: searchReducer,
  watchlists: watchlistsReducer,
  user: accountReducer,
  investments: invsetmentsReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['watchlists'],
};

const pReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  pReducer,
  applyMiddleware(thunk),
);

export const persistor = persistStore(store);
