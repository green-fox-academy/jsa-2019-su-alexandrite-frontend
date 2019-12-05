import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';

import store from './store';
import MainTabNavigation from './navigation/MainTabNavigation';

const App = () => (
  <Provider store={store}>
    <MainTabNavigation />
  </Provider>
);

export default registerRootComponent(App);
