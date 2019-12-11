import React from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const editorMode = ({ checkedItems, isEdit, toggle }) => {
  const num = checkedItems.filter((checked) => checked).length;

  return (
    <View style={styles.editorMode}>
      <View style={styles.editorModeLeft}>
        <EvilIcons name="trash" size={20} color="red" />
        <Text>{num}</Text>
      </View>
      <View style={styles.editorModeRight}>
        <TouchableHighlight>
          <Text style={{ color: '#c12424', paddingHorizontal: 15, paddingVertical: 8 }}> Delete WatchList</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => toggle(!isEdit)}>
          <Text style={{ color: '#666666', paddingHorizontal: 15, paddingVertical: 8 }}>Cancel</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

editorMode.propTypes = {
  isEdit: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  checkedItems: PropTypes.arrayOf.isRequired,
};

export default editorMode;
