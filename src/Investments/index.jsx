import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import commonStyles from '../common/styles';
import SearchButton from '../common/HeaderSearchButton';
import PortfolioValue from './PortfolioValue';
import { calculatePortfolioValue } from '../redux/investment/actionCreator';
import PortfolioNews from './PortfolioNews';
import TransactionPopup from './TransactionPopup';

const navigationOptions = {
  title: 'Investments',
  headerRight: () => <SearchButton />,
};

const Investments = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculatePortfolioValue());
  }, []);

  return (
    <View style={commonStyles.container}>
      <PortfolioValue />
      <PortfolioNews />
      <TransactionPopup />
    </View>
  );
};

Investments.navigationOptions = navigationOptions;

export default Investments;
