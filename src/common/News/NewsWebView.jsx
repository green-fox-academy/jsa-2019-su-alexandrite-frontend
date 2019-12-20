import React from 'react';
import { WebView } from 'react-native-webview';
import { useNavigationParam } from 'react-navigation-hooks';
import { ActivityIndicator } from 'react-native';

export default () => (
  <WebView
    source={{ uri: useNavigationParam('url') }}
    renderLoading={() => <ActivityIndicator />}
  />
);
