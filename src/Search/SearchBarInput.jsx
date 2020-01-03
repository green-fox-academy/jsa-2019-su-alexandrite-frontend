import React, { useEffect } from 'react';
import {
  TextInput,
} from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import { searchStockData } from '../redux/search/actionCreator';

const SearchBarInput = ({
  text,
  setText,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    let timer;
    if (text.length >= 2) {
      timer = setTimeout(() => {
        dispatch(searchStockData(text));
      }, 300);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [text]);

  return (
    <TextInput
      testID="search-text-input"
      style={styles.searchBar}
      clearButtonMode="while-editing"
      onChangeText={setText}
      value={text}
    />
  );
};


SearchBarInput.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
};


export default SearchBarInput;
