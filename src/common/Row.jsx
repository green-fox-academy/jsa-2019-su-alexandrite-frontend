import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Row = ({ children, style, flex = 0 }) => (
  <View style={{ ...styles.row, ...style, flex }}>
    {children}
  </View>
);


Row.propTypes = {
  children: PropTypes.node,
  style: ViewPropTypes.style,
  flex: PropTypes.number,
};

Row.defaultProps = {
  children: undefined,
  style: undefined,
  flex: 0,
};

export default Row;
