import React from 'react';
import {
  Dimensions,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import PropTypes from 'prop-types';
import chartHelper from '../../common/chartHelper';

const chartConfig = {
  propsForDots: {
    r: '1',
  },
  backgroundColor: '#fff',
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  decimalPlaces: 0,
  labelColor: () => '#666',
};

const PerformanceChart = ({ data, range }) => {
  const values = Object.values(data);
  const keys = Object.keys(data);
  const firstOccurrence = chartHelper.firstOccurrence(keys, range);
  return (
    <LineChart
      data={{
        labels: [...Object.keys(data).keys()], // indexes instead of raw labels
        datasets: [{ data: Object.values(data) }],
      }}
      width={Dimensions.get('window').width - 60}
      height={200}
      formatXLabel={(val) => chartHelper.formatXLabel(val, range, keys[val], firstOccurrence)}
      yAxisLabel="$"
      yLabelsOffset={10}
      chartConfig={{
        ...chartConfig,
        color: (opacity = 1) => (
          (values[0] > values[values.length - 1])
            ? `rgba(255, 0, 0, ${opacity})`
            : `rgba(94, 206, 177, ${opacity})`),
      }}
    />
  );
};

PerformanceChart.propTypes = {
  data: PropTypes.shape({
    [PropTypes.string]: PropTypes.number,
  }).isRequired,
  range: PropTypes.string.isRequired,
};

export default PerformanceChart;
