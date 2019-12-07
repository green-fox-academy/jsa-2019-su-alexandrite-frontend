import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ErrorMessage = ({ message }) => (
  <View style={styles.errorMessageContainer}>
    <Text style={styles.errorMessageText}>{message}</Text>
  </View>
);


ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
