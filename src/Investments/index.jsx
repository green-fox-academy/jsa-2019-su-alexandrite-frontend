import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import commonStyles from '../common/styles';
import SearchButton from '../common/HeaderSearchButton';
import PortfolioValue from './PortfolioValue';
import { calculatePortfolioValue } from '../redux/investment/actionCreator';
import PortfolioNews from './PortfolioNews';
import Allocation from './Allocation';

const navigationOptions = {
  title: 'Investments',
  headerRight: () => <SearchButton />,
};

const Investments = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculatePortfolioValue());
  }, []);

  const { alignItems, ...rest } = commonStyles.container;
  return (
    <ScrollView style={rest} contentContainerStyle={{ alignItems }}>
      <PortfolioValue />
      <Allocation />
      <PortfolioNews />
    </ScrollView>
  );
};

Investments.navigationOptions = navigationOptions;

export default Investments;
