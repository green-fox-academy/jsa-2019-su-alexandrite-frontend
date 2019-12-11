import React, { useEffect, useState } from 'react';
import {
  View,
  ActivityIndicator,
} from 'react-native';
// import { LineChart, Path, YAxis, XAxis, Grid } from 'react-native-svg-charts';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import stockActions from '../redux/stock/actionCreator';
import style from './style';
import Card from '../common/Card';
import ErrorMessage from '../common/ErrorMessage';
import constants from '../common/constants';
import PerformanceChart from './charts/PerformanceChart';
import ChartTimeRangeButton from './charts/ChartTimeRangeButton';

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

  useEffect(() => {
    setSelectedData(historicalData ? historicalData[timeRange] : { data: [], keys: [] });
  }, [historicalData]);

  return (
    <Card title="Performance">
      {!error ? (
        <View style={style.perfChartContainer}>
          {loading && <ActivityIndicator size="large" />}
          {!loading && !error && selectedData && (
            <PerformanceChart data={selectedData.data} labels={selectedData.keys} />
          )}
        </View>
      ) : <ErrorMessage message={error.message} />}
      <View style={style.perfChartTimeRangeSelector}>
        {constants.STOCK_CHART_TIME_RANGES.map((range) => {
          const active = range === timeRange;
          return (
            <ChartTimeRangeButton
              key={range}
              range={range}
              active={active}
              onPress={() => setTimeRange(range)}
            />
          );
        })}
      </View>
    </Card>
  );
};

Performance.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default Performance;
