import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Column = ({ children, style }) => (
  <View style={{ ...style, ...styles.column }}>
    {children}
  </View>
);

Column.propTypes = {
  children: PropTypes.element,
  style: PropTypes.instanceOf(StyleSheet),
};

Column.defaultProps = {
  children: undefined,
  style: undefined,
};

export default Column;
