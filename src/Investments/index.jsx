import React, { useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  Button,
  RefreshControl,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import commonStyles from '../common/styles';
import SearchButton from '../common/HeaderSearchButton';
import PortfolioValue from './PortfolioValue';
import { calculatePortfolioValue } from '../redux/investment/actionCreator';
// import PortfolioNews from './PortfolioNews';
import Allocation from './Allocation';
import Instruments from './Instruments';

const navigationOptions = {
  title: 'Investments',
  headerRight: () => <SearchButton />,
};

const Investments = () => {
  const { accessToken } = useSelector((state) => state.user);
  const { isLoading } = useSelector((state) => state.investments);
  const dispatch = useDispatch();
  const { push } = useNavigation();

  const onRefresh = React.useCallback(() => {
    dispatch(calculatePortfolioValue());
  });

  useEffect(() => {
    if (accessToken !== '') {
      dispatch(calculatePortfolioValue());
    }
  }, [accessToken]);

  return (
    <ScrollView
      contentContainerStyle={commonStyles.container}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
      }
    >
      <Text>{`${isLoading}`}</Text>
      {accessToken
        ? (
          <>
            <PortfolioValue />
            <Allocation />
            <Instruments />
          </>
        )
        : (
          <View>
            <Text>Please Login</Text>
            <Button title="Login" onPress={() => push('Login')} />
          </View>
        )}
    </ScrollView>
  );
};

Investments.navigationOptions = navigationOptions;

export default Investments;
