import React from 'react';
import { ScrollView } from 'react-native';
import commonStyles from '../common/styles';
import SearchButton from '../common/HeaderSearchButton';
import PortfolioValue from './PortfolioValue';
import Instruments from './Instruments';

const navigationOptions = {
  title: 'Investments',
  headerRight: () => <SearchButton />,
};

const Investments = () => {
  const { alignItems, ...rest } = commonStyles.container;
  return (
    <ScrollView style={rest} contentContainerStyle={{ alignItems }}>
      <PortfolioValue />
      <Instruments />
    </ScrollView>
  );
};

Investments.navigationOptions = navigationOptions;

export default Investments;
