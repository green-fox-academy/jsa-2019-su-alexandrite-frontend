import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const EditorButton = ({ isEdit, toggle }) => (
  <View style={styles.editor}>
    <TouchableHighlight style={styles.editorButton} onPress={() => toggle(!isEdit)}>
      <MaterialIcons style={{ fontSize: 16 }} name="edit" />
    </TouchableHighlight>
  </View>
);

EditorButton.prototypes = {
  isEdit: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default EditorButton;
