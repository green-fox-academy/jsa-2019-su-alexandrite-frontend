import React from 'react';
import { View, Text } from 'react-native';
import commonStyles from '../common/styles';
import WatchList from './WatchList';

export default () => (
  <View style={commonStyles.container}>
    <Text>This is the watchlists screen</Text>
    <WatchList/>
  </View>
);
