import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Column = ({ children, style }) => (
  <View style={{ ...styles.column, ...style }}>
    {children}
  </View>
);

Column.propTypes = {
  children: PropTypes.node,
  style: ViewPropTypes.style,
};

Column.defaultProps = {
  children: undefined,
  style: undefined,
};

export default Column;
