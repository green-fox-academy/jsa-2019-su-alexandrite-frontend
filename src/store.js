import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import thunk from 'redux-thunk';
import stockReducer from './redux/stock/reducer';
import searchReducer from './redux/search/reducer';
import watchlistsReducer from './redux/watchList/reducer';

const reducer = combineReducers({
  stock: stockReducer,
  search: searchReducer,
  watchlists: watchlistsReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['watchlists'],
};

const pReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  pReducer,
  applyMiddleware(thunk),
);

export const persistor = persistStore(store);
