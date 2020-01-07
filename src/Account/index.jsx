import React from 'react';
import { View, Text } from 'react-native';
import commonStyles from '../common/styles';
import Balance from './Balance';

export default () => (
  <View style={commonStyles.container}>
    <Text>This is the account</Text>
    <Balance />
  </View>
);
