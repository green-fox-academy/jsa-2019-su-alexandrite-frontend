import React from 'react';
import { View } from 'react-native';
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
  </View>
);

Investment.navigationOptions = navigationOptions;

export default Investment;
