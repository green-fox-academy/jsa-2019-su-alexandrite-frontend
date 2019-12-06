import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Card = ({ children, title }) => (
  <View style={styles.card}>
    {title && <Text style={styles.cardTitle}>{title}</Text>}
    {children}
  </View>
);


Card.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
};

Card.defaultProps = {
  children: undefined,
  title: '',
};

export default Card;
