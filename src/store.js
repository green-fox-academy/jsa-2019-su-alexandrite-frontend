import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import stockReducer from './redux/stock/reducer';
import searchReducer from './redux/search/reducer';
import watchlistsReducer from './redux/watchList/reducer';
import accountReducer from './redux/account/reducer';
import invsetmentsReducer from './redux/investment/reducer';

const reducer = combineReducers({
  stock: stockReducer,
  search: searchReducer,
  watchlists: watchlistsReducer,
  user: accountReducer,
  investments: invsetmentsReducer,
});

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['watchlists'],
};

const pReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  pReducer,
  applyMiddleware(thunk),
);

export const persistor = persistStore(store);
