import React from 'react';
import SearchBar from './HeaderBar';
import Result from './Result';

const navigationOptions = {
  header: () => <SearchBar />,
};

const Search = () => (
  <Result />
);

Search.navigationOptions = navigationOptions;

export default Search;
