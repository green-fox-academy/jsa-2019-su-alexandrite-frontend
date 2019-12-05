import React from 'react';
import { View } from 'react-native';
import SearchBar from './headerBar';
import Result from './result';

const navigationOptions = {
  header: () => <SearchBar />,
};

const search = () => (
  <View>
    <Result />
  </View>
);

search.navigationOptions = navigationOptions;

export default search;
