import React from 'react';
import SearchBar from './HeaderBar';
import Result from './Result';

const navigationOptions = {
  header: () => <SearchBar />,
};

const search = () => (
  <Result />
);

search.navigationOptions = navigationOptions;

export default search;
