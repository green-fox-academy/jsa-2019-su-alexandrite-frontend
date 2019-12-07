import React, { useEffect } from 'react';
import {
  View,
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

const detailsRow = (key, val) => (
  <View style={style.detailsContentRow}>
    <Text style={style.detailsContentKey}>{`${key}:`}</Text>
    <Text style={style.detailsContentVal}>{`${val}`}</Text>
  </View>
);

const Stats = ({ symbol }) => {
  const dispatch = useDispatch();
  const { details, loading, error } = useSelector((state) => state.stock);

  useEffect(() => {
    dispatch(fetchStockDetails(symbol));
  }, []);

  return (
    <Card title="Details">
      {!error ? (
        <View style={style.detailsContentContainer}>
          {loading && <ActivityIndicator size="large" />}
          {!loading && details && (
            <>
              <Column>
                {detailsRow('52 WK Low', details.week52low)}
                {detailsRow('52 WK High', details.week52high)}
                {detailsRow('P/E', details.peRatio)}
                {detailsRow('EPS', details.ttmEPS)}
                {detailsRow('DIV. Yield', `${decimal2Percentage(details.dividendYield)}%`)}
                {detailsRow('Payout Ratio', 'N/A')}
                {detailsRow('Div...Date', details.nextDividendDate)}
              </Column>
              <Column style={{ marginLeft: 25 }}>
                {detailsRow('Total Cash', processLargeNumbers(details.totalCash))}
                {detailsRow('Total Cash/Share', 'N/A')}
                {detailsRow('Total Debt', processLargeNumbers(details.currentDebt))}
                {detailsRow('Operating Cash F', 'N/A')}
                {detailsRow('Free Cash F', 'N/A')}
                {detailsRow('Revenue', processLargeNumbers(details.revenue))}
                {detailsRow('Rev/Share', details.revenuePerShare)}
                {detailsRow('EBITDA', processLargeNumbers(details.EBITDA))}
              </Column>
            </>
          )}
        </View>
      ) : <ErrorMessage message={error.message} />}
    </Card>
  );
};

Stats.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default Stats;
