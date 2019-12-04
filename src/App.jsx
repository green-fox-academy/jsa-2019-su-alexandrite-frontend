import React from 'react';
import { registerRootComponent } from 'expo';
import MainTabNavigation from './navigation/MainTabNavigation';

const App = () => (
  <MainTabNavigation />
);

export default registerRootComponent(App);
