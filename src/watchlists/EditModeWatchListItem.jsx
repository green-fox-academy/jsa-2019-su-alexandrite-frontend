import PropTypes from 'prop-types';
import React from 'react';
import {
  Text, View, TouchableHighlight,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';

export default function WatchListItem({
  isChecked,
  onSelect,
  ticker,
}) {
  return (
    <TouchableHighlight
      underlayColor="rgba(0,0,0,0.1)"
      onPress={onSelect}
    >
      <View style={styles.watchListItem}>
        <MaterialIcons
          style={[styles.checkButton, { color: isChecked ? '#666' : '#eee' }]}
          name={isChecked ? 'check-box' : 'check-box-outline-blank'}
        />
        <View style={styles.watchListItemColumn}>
          <Text style={[styles.watchListItemColumnText, { fontWeight: 'bold', color: '#566ed3' }]}>
            {ticker}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

WatchListItem.propTypes = {
  ticker: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};
