import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const CardFooter = ({ children }) => (
  <View style={styles.cardFooter}>
    {children}
  </View>
);

CardFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

CardFooter.defaultProps = {
  children: [],
};

export default CardFooter;
