import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Editor = ({ isEdit, toggle }) => (
  <View style={styles.editor}>
    <TouchableHighlight onPress={() => toggle(!isEdit)}>
      <FontAwesome style={{ fontSize: 20 }} name="edit" />
    </TouchableHighlight>
  </View>
);

Editor.prototypes = {
  isEdit: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Editor;
