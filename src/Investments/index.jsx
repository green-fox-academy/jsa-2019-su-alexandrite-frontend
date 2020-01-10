import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import commonStyles from '../common/styles';
import SearchButton from '../common/HeaderSearchButton';
import PortfolioValue from './PortfolioValue';
import { calculatePortfolioValue } from '../redux/investment/actionCreator';
import PortfolioNews from './PortfolioNews';
import Instruments from './Instruments';


const navigationOptions = {
  title: 'Investments',
  headerRight: () => <SearchButton />,
};

const Investments = () => {
  const { alignItems, ...rest } = commonStyles.container;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculatePortfolioValue());
  }, []);

  return (
    <ScrollView style={rest} contentContainerStyle={{ alignItems }}>
      <PortfolioValue />
      <Instruments />
      <PortfolioNews />
    </ScrollView>
  );
};

Investments.navigationOptions = navigationOptions;

export default Investments;
