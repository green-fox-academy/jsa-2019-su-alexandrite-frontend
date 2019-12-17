import React from 'react';
import { View, Text } from 'react-native';
import commonStyles from '../common/styles';
import SearchButton from '../common/HeaderSearchButton';

const navigationOptions = {
  headerRight: () => <SearchButton />,
};

const Investment = () => (
  <View style={commonStyles.container}>
    <Text>This is the investment screen</Text>
  </View>
);

Investment.navigationOptions = navigationOptions;

export default Investment;
