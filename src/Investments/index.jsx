import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserInvestmentShares, fetchStockPrice } from '../redux/investment/actionCreator';
import commonStyles from '../common/styles';
import SearchButton from '../common/HeaderSearchButton';
import PortfolioValue from './PortfolioValue';

const navigationOptions = {
  title: 'Investment',
  headerRight: () => <SearchButton />,
};

const Investment = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    userShares,
    price,
    error,
  } = useSelector((state) => state.investments);

  useEffect(() => {
    dispatch(fetchUserInvestmentShares(1));
  }, []);

  useEffect(() => {
    if (userShares) {
      const symbols = userShares.stocks.map((stock) => stock.symbol);
      dispatch(fetchStockPrice(symbols));
    }
  }, [userShares, isLoading]);

  return (
    <View style={commonStyles.container}>
      <PortfolioValue isLoading={isLoading} userShares={userShares} price={price} error={error} />
    </View>
  );
};

Investment.navigationOptions = navigationOptions;

export default Investment;
