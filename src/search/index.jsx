import React from 'react';
import SearchBar from './headerBar';
import Result from './result';

const navigationOptions = {
  header: () => <SearchBar />,
};

const search = () => (
  <Result />
);

search.navigationOptions = navigationOptions;

export default search;
