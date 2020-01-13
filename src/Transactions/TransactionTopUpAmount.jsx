import React from 'react';
import {
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { moneyAmount2String } from '../common/numbers';
import styles from './styles';

const TransactionTopUpAmount = ({ amount }) => (
  <Text style={styles.transactionAmount}>
    {`+${moneyAmount2String(amount)}`}
  </Text>
);

TransactionTopUpAmount.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default TransactionTopUpAmount;
