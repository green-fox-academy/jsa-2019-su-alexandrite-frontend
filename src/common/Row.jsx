import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Row = ({ children, style }) => (
  <View style={{ ...styles.row, ...style }}>
    {children}
  </View>
);


Row.propTypes = {
  children: PropTypes.node,
  style: ViewPropTypes.style,
};

Row.defaultProps = {
  children: undefined,
  style: undefined,
};

export default Row;
