import React, { useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import stockActions from '../redux/stock/actionCreator';
import style from './style';
import Card from '../common/Card';
import Column from '../common/Column';
import ErrorMessage from '../common/ErrorMessage';
import { decimal2Percentage, processLargeNumbers } from '../common/numbers';

const DetailsRow = (key, val) => (
  <View style={style.detailsContentRow}>
    <Text style={style.detailsContentKey}>{`${key}:`}</Text>
    <Text style={style.detailsContentVal}>{`${val}`}</Text>
  </View>
);

const Stats = ({ symbol }) => {
  const dispatch = useDispatch();
  const {
    stockStatsData: details,
    loadingStockStatsData: loading,
    stockStatsDataError: error,
  } = useSelector((state) => state.stock);

  useEffect(() => {
    dispatch(stockActions.fetchStockDetails(symbol));
  }, []);

  return (
    <Card title="Details">
      {!error ? (
        <View style={style.detailsContentContainer}>
          {loading && <ActivityIndicator size="large" />}
          {!loading && details && (
            <>
              <Column>
                {DetailsRow('52 WK Low', details.week52low)}
                {DetailsRow('52 WK High', details.week52high)}
                {DetailsRow('P/E', details.peRatio)}
                {DetailsRow('EPS', details.ttmEPS)}
                {DetailsRow('DIV. Yield', `${decimal2Percentage(details.dividendYield)}%`)}
                {DetailsRow('Payout Ratio', 'N/A')}
                {DetailsRow('Div...Date', details.nextDividendDate)}
              </Column>
              <Column style={{ marginLeft: 25 }}>
                {DetailsRow('Total Cash', processLargeNumbers(details.totalCash))}
                {DetailsRow('Total Cash/Share', 'N/A')}
                {DetailsRow('Total Debt', processLargeNumbers(details.currentDebt))}
                {DetailsRow('Operating Cash F', 'N/A')}
                {DetailsRow('Free Cash F', 'N/A')}
                {DetailsRow('Revenue', processLargeNumbers(details.revenue))}
                {DetailsRow('Rev/Share', details.revenuePerShare)}
                {DetailsRow('EBITDA', processLargeNumbers(details.EBITDA))}
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
