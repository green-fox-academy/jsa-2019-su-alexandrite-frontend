import React from 'react';
import { TouchableHighlight } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from 'react-navigation-hooks';
import styles from './styles';

export default function SearchButton() {
  const { push } = useNavigation();
  return (
    <TouchableHighlight onPress={() => push('Search')} style={styles.headerIcon}>
      <FontAwesome
        size={18}
        name="search"
        color="#999999"
      />
    </TouchableHighlight>
  );
}
