import React from 'react';
import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { store, persistor } from './store';
import MainTabNavigation from './navigation/MainTabNavigation';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <MainTabNavigation />
    </PersistGate>
  </Provider>
);

export default registerRootComponent(App);
