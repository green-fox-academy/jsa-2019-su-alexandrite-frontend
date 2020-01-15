import React, { useEffect } from 'react';
import {
  Text,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchStockDetails } from '../redux/stock/actionCreator';
import style from './style';
import Card from '../common/Card';
import Column from '../common/Column';
import ErrorMessage from '../common/ErrorMessage';
import { decimal2Percentage, processLargeNumbers } from '../common/numbers';
import Row from '../common/Row';

export const DetailsRow = (key, val, color) => (
  <Column style={style.detailsContentCell}>
    <Text style={style.detailsContentKey}>{`${key}`}</Text>
    <Text style={{ ...style.detailsContentVal, color }}>{`${val || 'N/A'}`}</Text>
  </Column>
);

const Stats = ({ symbol }) => {
  const dispatch = useDispatch();
  const {
    stockStatsData: details,
    isLoadingStockStatsData: isLoading,
    stockStatsDataError: error,
  } = useSelector((state) => state.stock);

  useEffect(() => {
    dispatch(fetchStockDetails(symbol));
  }, []);

  return (
    <Card>

      {!error ? (
        <Row style={{ flexWrap: 'wrap' }}>
          {isLoading && <ActivityIndicator size="large" />}
          {!isLoading && details && (
            <>
              {DetailsRow('52 WK Low', details.week52low)}
              {DetailsRow('52 WK High', details.week52high)}
              {DetailsRow('P/E', details.peRatio)}
              {DetailsRow('EPS', details.ttmEPS)}
              {DetailsRow('DIV. Yield', `${decimal2Percentage(details.dividendYield)}%`)}
              {DetailsRow('Payout Ratio', 'N/A')}
              {DetailsRow('Div...Date', details.nextDividendDate)}
              {DetailsRow('Total Cash', processLargeNumbers(details.totalCash))}
              {DetailsRow('Total Cash/Share', 'N/A')}
              {DetailsRow('Total Debt', processLargeNumbers(details.currentDebt))}
              {DetailsRow('Operating Cash F', 'N/A')}
              {DetailsRow('Free Cash F', 'N/A')}
              {DetailsRow('Revenue', processLargeNumbers(details.revenue))}
              {DetailsRow('Rev/Share', details.revenuePerShare)}
              {DetailsRow('EBITDA', processLargeNumbers(details.EBITDA))}
            </>
          )}
        </Row>
      ) : <ErrorMessage message={error.message} />}
    </Card>
  );
};

Stats.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default Stats;
