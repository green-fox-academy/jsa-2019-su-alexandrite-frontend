import React from 'react';
import { View } from 'react-native';
import commonStyles from '../common/styles';
import SearchButton from '../common/HeaderSearchButton';
import PortfolioValue from './PortfolioValue';

const navigationOptions = {
  title: 'Investments',
  headerRight: () => <SearchButton />,
};

const Investment = () => {
  return (
    <View style={commonStyles.container}>
      <PortfolioValue />
    </View>
  );
};

Investment.navigationOptions = navigationOptions;

export default Investment;
