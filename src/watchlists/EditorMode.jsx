import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const editorMode = ({ checkedItems, isEdit, toggle }) => {
  const num = checkedItems.filter((checked) => checked).length;

  return (
    <View style={styles.editorMode}>
      <TouchableHighlight style={styles.editorButton} underlayColor="#ffebeb">
        <Text style={styles.editDeleteButton}>
          <FontAwesome5 size={14} name="trash" color="#666" />
          {' '}
          {num}
        </Text>
      </TouchableHighlight>
      <View style={styles.editorModeRight}>
        <TouchableHighlight style={styles.editorButton} underlayColor="#ffebeb">
          <Text style={{ color: '#c12424', fontSize: 12, fontWeight: 'bold' }}> Delete WatchList</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.editorButton} onPress={() => toggle(!isEdit)} underlayColor="#eee">
          <Text style={{ color: '#666', fontSize: 12, fontWeight: 'bold' }}>Cancel</Text>
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
