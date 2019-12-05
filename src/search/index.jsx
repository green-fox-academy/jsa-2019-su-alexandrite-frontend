import React from 'react';
import { View, Text } from 'react-native';
import SearchBar from './headerBar';

const navigationOptions = {
  header: () => <SearchBar />,
};

const search = () => (
  <View>
    <Text>Search Screen</Text>
  </View>
);

search.navigationOptions = navigationOptions;

export default search;
