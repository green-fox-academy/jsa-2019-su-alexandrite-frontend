import React, { useEffect, useState } from 'react';
import {
  View,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import stockActions from '../redux/stock/actionCreator';
import style from './style';
import Card from '../common/Card';
import ErrorMessage from '../common/ErrorMessage';
import PerformanceChart from './charts/PerformanceChart';
import TimeRangeSelector from './charts/TimeRangeSelector';

const Performance = ({ symbol }) => {
  const dispatch = useDispatch();
  const [timeRange, setTimeRange] = useState('1y');
  const [selectedData, setSelectedData] = useState({ data: [], keys: [] });
  const {
    historicalData,
    loadingHistoricalChartData: loading,
    historicalDataError: error,
  } = useSelector((state) => state.stock);

  useEffect(() => {
    dispatch(stockActions.fetchHistoryChartData(symbol, timeRange));
  }, [timeRange]);

  useEffect(
    () => () => dispatch(stockActions.resetStockInfo()),
    [],
  );

  useEffect(() => {
    setSelectedData(historicalData ? historicalData[timeRange] : { data: [], keys: [] });
  }, [historicalData]);

  return (
    <Card title="Performance">
      {!error ? (
        <View style={style.perfChartContainer}>
          {loading && <ActivityIndicator size="large" />}
          {!loading && !error && selectedData && (
            <PerformanceChart
              data={selectedData.data}
              labels={selectedData.keys}
              range={timeRange}
            />
          )}
        </View>
      ) : <ErrorMessage message={error.message} />}
      <TimeRangeSelector selected={timeRange} onSelect={setTimeRange} />
    </Card>
  );
};

Performance.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default Performance;
