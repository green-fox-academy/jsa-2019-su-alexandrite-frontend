import React from 'react';
import {
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Column from '../common/Column';
import Row from '../common/Row';
import Tag from '../common/Tag';

const TransactionTypeAndTime = ({ symbol, timestamp, type }) => (
  <Column style={styles.typeAndTime}>
    <Row>
      <Tag text={type} />
      <Text style={styles.typeAndTimeSymbol}>
        {symbol}
      </Text>
    </Row>
    <Text style={styles.typeAndTimeTime}>
      {new Date(timestamp).toLocaleString()}
    </Text>
  </Column>
);

TransactionTypeAndTime.propTypes = {
  symbol: PropTypes.string,
  type: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};

TransactionTypeAndTime.defaultProps = {
  symbol: undefined,
};

export default TransactionTypeAndTime;
