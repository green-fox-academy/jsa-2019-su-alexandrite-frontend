import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { resetStockInfo } from '../redux/stock/actionCreator';
import Card from '../common/Card';
import Row from '../common/Row';
import PerformanceChart from './charts/PerformanceChart';
import Price from './charts/Price';
import TimeRangeSelector from './charts/TimeRangeSelector';

const Performance = ({ symbol }) => {
  const dispatch = useDispatch();
  const [timeRange, setTimeRange] = useState('1y');
  const [selectedData, setSelectedData] = useState({});
  const {
    historicalData: data,
  } = useSelector((state) => state.stock);

  useEffect(() => {
    if (data.length) setSelectedData(data[data.length - 1]);
  }, [data]);

  useEffect(
    () => () => dispatch(resetStockInfo()),
    [],
  );

  return (
    <Card style={{ borderBottomWidth: 0 }}>
      <Row style={{ justifyContent: 'center', minHeight: 250 }}>
        <PerformanceChart
          symbol={symbol}
          range={timeRange}
          onPress={setSelectedData}
        />
      </Row>
      <TimeRangeSelector selected={timeRange} onSelect={setTimeRange} />
      <Price data={selectedData} />
    </Card>
  );
};

Performance.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default Performance;
