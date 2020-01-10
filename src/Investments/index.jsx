import React, { useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
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
  const { accessToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { push } = useNavigation();

  useEffect(() => {
    if (accessToken !== '') {
      dispatch(calculatePortfolioValue());
    }
  }, [accessToken]);

  const { alignItems, ...rest } = commonStyles.container;
  return (
    <ScrollView style={rest} contentContainerStyle={{ alignItems }}>
      {accessToken
        ? (
          <>
            <PortfolioValue />
            <Allocation />
            <PortfolioNews />
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
