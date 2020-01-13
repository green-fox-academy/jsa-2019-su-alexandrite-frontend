import React from 'react';
import {
  Text, View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Tag = ({ text }) => (
  <View style={styles.tag}>
    <Text style={styles.tagText}>
      {`${text.toUpperCase()}`}
    </Text>
  </View>
);

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tag;
