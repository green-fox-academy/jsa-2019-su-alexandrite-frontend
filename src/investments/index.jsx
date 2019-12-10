import React from 'react';
import { View, Text } from 'react-native';
import commonStyles from '../common/styles';
import SearchButton from '../common/HeaderSearchButton';

const navigationOptions = {
  headerRight: () => <SearchButton />,
};

const investment = () => (
  <View style={commonStyles.container}>
    <Text>This is the investment screen</Text>
  </View>
);

investment.navigationOptions = navigationOptions;

export default investment;
