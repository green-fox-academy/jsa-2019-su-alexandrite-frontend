import React from 'react';
import { View, Text } from 'react-native';
import commonStyles from '../common/styles';
import SearchButton from '../common/HeaderSearchButton';
import PortfolioValue from './PortfolioValue';

const navigationOptions = {
  title: 'Investment',
  headerRight: () => <SearchButton />,
};

const Investment = () => (
  <View style={commonStyles.container}>
    <PortfolioValue />
    <Text>This is the investment screen</Text>
  </View>
);

Investment.navigationOptions = navigationOptions;

export default Investment;
