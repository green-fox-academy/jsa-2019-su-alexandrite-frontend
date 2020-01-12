
import React from 'react';
import {
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import Row from '../common/Row';
import Column from '../common/Column';
import { moneyAmount2String } from '../common/numbers';


const TransactionItem = ({
  item: {
    type,
    timestamp,
    shares,
    price,
    amount,
  },
}) => (
    <Row style={{ justifyContent: 'space-between', padding: 15 }}>
      <Column>
        <Text>{type}</Text>
        <Text>{new Date(timestamp).toLocaleDateString()}</Text>
      </Column>
      <Column>
        {
          type === 'topUp'
            ? (
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                {`+${moneyAmount2String(amount)}`}
              </Text>
            ) : (
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                {`${type === 'buy' ? '-' : '+'}${moneyAmount2String(price * shares)}`}
              </Text>
            )
        }
      </Column>
    </Row>
  );

TransactionItem.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.number,
      timestamp: PropTypes.string,
    }),
    PropTypes.shape({
      type: PropTypes.string,
      shares: PropTypes.number,
      price: PropTypes.number,
      timestamp: PropTypes.string,
    }),
  ]).isRequired,
};

export default TransactionItem;
