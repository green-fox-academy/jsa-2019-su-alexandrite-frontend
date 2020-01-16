import React from 'react';
import PropTypes from 'prop-types';

import Row from '../common/Row';
import Column from '../common/Column';
import styles from './styles';
import StockIcon from './StockIcon';
import TransactionTypeAndTime from './TransactionTypeAndTime';
import TransactionTradingAmount from './TransactionTradingAmount';
import TransactionTopUpAmount from './TransactionTopUpAmount';

const TransactionItem = ({
  item: {
    type,
    timestamp,
    shares,
    price,
    amount,
    symbol,
    status,
  },
}) => (
    <Row style={styles.transactionItem}>
      <Column>
        <Row>
          <StockIcon symbol={symbol} />
          <TransactionTypeAndTime symbol={symbol} timestamp={timestamp} type={type} />
        </Row>
      </Column>
      <Column style={{ alignItems: 'flex-end' }}>
        {
          type === 'topUp'
            ? <TransactionTopUpAmount amount={amount} />
            : <TransactionTradingAmount shares={shares} price={price} type={type} status={status} />
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
      status: PropTypes.string,
    }),
    PropTypes.shape({
      type: PropTypes.string,
      shares: PropTypes.number,
      price: PropTypes.number,
      timestamp: PropTypes.string,
      symbol: PropTypes.string,
      status: PropTypes.string,
    }),
  ]).isRequired,
};

export default TransactionItem;
