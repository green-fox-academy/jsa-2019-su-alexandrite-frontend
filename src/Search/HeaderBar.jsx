import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableHighlight,
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import styles from './styles';
import SearchBarInput from './SearchBarInput';

export default () => {
  const [searchInput, onChangeInput] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.headContainer}>
      <View style={styles.searchContainer}>
        <SearchBarInput text={searchInput} setText={onChangeInput} />
        <TouchableHighlight
          style={styles.cancelButton}
          onPress={() => navigation.pop()}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};
