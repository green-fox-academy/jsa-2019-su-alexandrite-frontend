import React from 'react';
import { View, Text, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Row from './Row';
import Column from './Column';

const Card = ({ children, title, style }) => (
  <View style={[styles.card, style]}>
    <Column flex={1}>
      {title && (<Row><Text style={styles.cardTitle}>{title}</Text></Row>)}
      {children}
    </Column>
  </View>
);


Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  title: PropTypes.string,
  style: ViewPropTypes.style,
};

Card.defaultProps = {
  children: [],
  title: undefined,
  style: null,
};

export default Card;
