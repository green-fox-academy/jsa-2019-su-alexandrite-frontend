import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Row from './Row';

const ErrorMessage = ({ message }) => (
  <Row style={styles.errorMessageContainer}>
    <Text style={styles.errorMessageText}>{message}</Text>
  </Row>
);


ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
