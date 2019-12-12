import React from 'react';
import {
  Dimensions,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import PropTypes from 'prop-types';
import constants from '../../common/constants';

const chartConfig = {
  propsForDots: {
    r: '2',
  },
  xLabelsOffset: 100,
  backgroundColor: '#fff',
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  decimalPlaces: 0,
  labelColor: () => '#666',
};

const formatXLabel = (i, range, label, firstOccurrence) => {
  if (range === '1m') {
    // if display data by days, we need to
    // filter half of the values so that the UI remains clean
    return !(parseInt(i, 10) % 2) ? label.substr(8, 10) : '';
  }
  if (range === '3m') {
    return firstOccurrence[label.substr(0, 7)] === i
      ? constants.MONTHS[new Date(label.substr(0, 7)).getMonth()] : '';
  }
  if (['1y', '2y', '5y'].indexOf(range) > -1) {
    // if display data by years, display the year label only
    // on January data points
    return (label.substr(5, 7) === '01') ? label.substr(0, 4) : '';
  }
  return constants.MONTHS[new Date(label).getMonth()];
};

const PerformanceChart = ({ data, range }) => {
  const values = Object.values(data);
  const keys = Object.keys(data);
  let firstOccurrence;
  // special case for 3m
  if (range === '3m') {
    firstOccurrence = keys.reduce((result, key, i) => ({
      ...result,
      ...(result[key.substr(0, 7)] || { [key.substr(0, 7)]: i }),
    }), {});
  }
  return (
    <LineChart
      data={{
        labels: [...Object.keys(data).keys()], // indexes instead of raw labels
        datasets: [{ data: Object.values(data) }],
      }}
      width={Dimensions.get('window').width - 60}
      height={200}
      formatXLabel={(val) => formatXLabel(val, range, keys[val], firstOccurrence)}
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
