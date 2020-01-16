import React from 'react';
import {
  TouchableHighlight,
  Text,
} from 'react-native';
import propTypes from 'prop-types';
import styles from './styles';

const TransactionButton = ({ transactionBehavior, active, onPress }) => (
  <TouchableHighlight
    style={[
      styles.TransactionButton,
      active && styles.TransactionButtonActive,
    ]}
    underlayColor="#0001"
    activeOpacity={0.5}
    onPress={() => onPress()}
  >
    <Text
      style={[
        styles.TransactionButtonText,
        active && styles.TransactionButtonTextActive,
      ]}
    >
      {transactionBehavior.toUpperCase()}
    </Text>

  </TouchableHighlight>
);

TransactionButton.propTypes = {
  transactionBehavior: propTypes.string.isRequired,
  active: propTypes.bool,
  onPress: propTypes.func.isRequired,
};

TransactionButton.defaultProps = {
  active: false,
};

export default TransactionButton;
