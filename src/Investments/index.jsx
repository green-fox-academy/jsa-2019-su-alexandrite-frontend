import React from 'react';
import { View } from 'react-native';
import commonStyles from '../common/styles';
import SearchButton from '../common/HeaderSearchButton';
import PortfolioValue from './PortfolioValue';

export const navigationOptions = {
  title: 'Investments',
  headerRight: () => <SearchButton />,
};

const Investments = () => (
  <View style={commonStyles.container}>
    <PortfolioValue />
  </View>
);

Investments.navigationOptions = navigationOptions;

export default Investments;
