import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const EditButton = ({ isInEditMode, toggleEditMode }) => (
  <View style={styles.editor}>
    <TouchableHighlight style={styles.editorButton} onPress={() => toggleEditMode(!isInEditMode)} underlayColor="#eee">
      <MaterialIcons size={16} color="#666" name="edit" />
    </TouchableHighlight>
  </View>
);

EditButton.propTypes = {
  isInEditMode: PropTypes.bool.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
};

export default EditButton;
