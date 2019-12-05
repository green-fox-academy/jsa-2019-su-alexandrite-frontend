import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Row = ({ children, style }) => (
  <View style={{ ...style, ...styles.row }}>
    {children}
  </View>
);


Row.propTypes = {
  children: PropTypes.element,
  style: PropTypes.instanceOf(StyleSheet),
};

Row.defaultProps = {
  children: undefined,
  style: undefined,
};

export default Row;
