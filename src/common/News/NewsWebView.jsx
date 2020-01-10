import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import { useNavigationParam } from 'react-navigation-hooks';
import { LayoutAnimation } from 'react-native';
import ProgressBar from '../ProgressBar';

export default () => {
  const [progress, setProgress] = useState(0);
  return (
    <WebView
      source={{ uri: useNavigationParam('url') }}
      startInLoadingState
      renderLoading={() => <ProgressBar progress={progress} />}
      onLoadProgress={({ nativeEvent }) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        setProgress(nativeEvent.progress);
      }}
    />
  );
};
