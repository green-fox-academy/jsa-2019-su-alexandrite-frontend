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
import { searchData } from '../redux/search/actionCreater';

export default function SearchBar() {
  const [value, onChangeText] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    let timer;
    if (value.length >= 2) {
      timer = setTimeout(() => {
        dispatch(searchData(value));
      }, 300);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [value]);

  return (
    <SafeAreaView style={styles.headContainer}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          clearButtonMode="while-editing"
          onChangeText={(text) => onChangeText(text)}
          value={value}
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
