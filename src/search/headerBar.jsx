import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  Text,
  TouchableHighlight,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import styles from './styles';
import searchActions from '../redux/search/actionCreator';

export default function SearchBar() {
  const [searchInput, onChangeInput] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    let timer;
    if (searchInput.length >= 2) {
      timer = setTimeout(() => {
        dispatch(searchActions.searchStockData(searchInput));
      }, 300);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [searchInput]);

  return (
    <SafeAreaView style={styles.headContainer}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          clearButtonMode="while-editing"
          onChangeText={(input) => onChangeInput(input)}
          value={searchInput}
        />
        <TouchableHighlight
          style={styles.cancelButton}
          onPress={() => navigation.pop()}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}
