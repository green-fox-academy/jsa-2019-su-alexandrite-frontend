import React, { useEffect } from 'react';
import {
  ScrollView,
  RefreshControl,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import commonStyles from '../common/styles';
import SearchButton from '../common/HeaderSearchButton';
import PortfolioValue from './PortfolioValue';
import { calculatePortfolioValue } from '../redux/investment/actionCreator';
// import PortfolioNews from './PortfolioNews';
import Allocation from './Allocation';
import Instruments from './Instruments';
import LoginButtonPage from '../Account/LoginButtonPage';

const navigationOptions = {
  title: 'INVESTMENTS',
  headerRight: () => <SearchButton />,
};

const Investments = () => {
  const { accessToken } = useSelector((state) => state.user);
  const { isLoading } = useSelector((state) => state.investments);
  const dispatch = useDispatch();

  const onRefresh = React.useCallback(() => {
    dispatch(calculatePortfolioValue());
  });

  useEffect(() => {
    if (accessToken !== '') {
      dispatch(calculatePortfolioValue());
    }
  }, [accessToken]);

  return (
    accessToken
      ? (
        <ScrollView
          contentContainerStyle={commonStyles.container}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
          }
        >
          <>
            <PortfolioValue />
            <Allocation />
            <Instruments />
          </>
        </ScrollView>
      ) : (
        <LoginButtonPage />
      )
  );
};

Investments.navigationOptions = navigationOptions;

export default Investments;
