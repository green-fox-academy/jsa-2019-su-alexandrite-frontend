import React from 'react';
import {
  Text,
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
  decimalPlaces: 2,
  labelColor: () => '#666',
};


const formatXLabel = (i, range, label) => {
  if (range === '1m') {
    // if display data by days, we need to
    // filter half of the values so that the UI remains clean
    return !(parseInt(i, 10) % 2) ? label : '';
  }
  if (['1y', '2y', '5y'].indexOf(range) > -1) {
    // if display data by years, display the year label only
    // on January data points
    return (label.substr(5, 7) === '01') ? label.substr(0, 4) : '';
  }
  return constants.MONTHS[new Date(label).getMonth()];
};

const PerformanceChart = ({ data, labels, range }) => (
  <LineChart
    data={{
      labels: [...labels.keys()], // indexes instead of raw labels
      datasets: [{ data }],
    }}
    decorator={({ value }) => <Text>{value}</Text>}
    width={Dimensions.get('window').width - 60}
    height={200}
    formatXLabel={(val) => formatXLabel(val, range, labels[val])}
    yAxisLabel="$"
    chartConfig={{
      ...chartConfig,
      color: (opacity = 1) => (
        (data[0] > data[data.length - 1])
          ? `rgba(255, 0, 0, ${opacity})`
          : `rgba(94, 206, 177, ${opacity})`),
    }}
  />
);

PerformanceChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  range: PropTypes.string.isRequired,
};

export default PerformanceChart;
