import React from 'react';
import {
  Text, ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Row from '../../common/Row';
import Column from '../../common/Column';
import { moneyAmount2String } from '../../common/numbers';
import ErrorMessage from '../../common/ErrorMessage';
import styles from '../style';

const Price = ({ data }) => {
  const {
    historicalDataError: error,
    isLoadingHistoricalChartData: isLoading,
  } = useSelector((state) => state.stock);

  if (error) {
    return (
      <Row style={{ marginTop: 30 }}>
        <ErrorMessage error={error.message} />
      </Row>
    );
  }
  if (isLoading || !data) {
    return (
      <Row style={{ justifyContent: 'center', marginTop: 30 }}>
        <Column>
          <ActivityIndicator size="large" />
        </Column>
      </Row>
    );
  }
  return (
    <Row style={{ justifyContent: 'center', marginTop: 30 }}>
      <Column>
        <Text style={styles.price}>
          {moneyAmount2String(data.value)}
        </Text>
        <Text style={styles.priceDate}>
          {data.date}
        </Text>
      </Column>
    </Row>
  );
};

Price.propTypes = {
  data: PropTypes.shape({
    value: PropTypes.number,
    date: PropTypes.string,
  }).isRequired,
};

export default Price;
