import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Column = ({ children, style, flex = 0 }) => (
  <View style={{ ...styles.column, ...style, flex }}>
    {children}
  </View>
);

Column.propTypes = {
  children: PropTypes.node,
  style: ViewPropTypes.style,
  flex: PropTypes.number,
};

Column.defaultProps = {
  children: undefined,
  style: undefined,
  flex: 0,
};

export default Column;
