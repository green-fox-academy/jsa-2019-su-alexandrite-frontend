import React from 'react';
import {
  Text,
  Dimensions,
} from 'react-native';
// import { LineChart, Path, YAxis, XAxis, Grid } from 'react-native-svg-charts';
import { LineChart } from 'react-native-chart-kit';
import PropTypes from 'prop-types';
import constants from '../../common/constants';

const PerformanceChart = ({ data, labels }) => (
  <LineChart
    data={{
      labels: labels.filter((_, i) => i % 2),
      datasets: [{ data }],
    }}
    decorator={({ value }) => <Text>{value}</Text>}
    formatXLabel={(val) => constants.MONTHS[new Date(val).getMonth()]}
    width={Dimensions.get('window').width - 60} // from react-native
    height={200}
    yAxisLabel="$"
    chartConfig={{
      propsForDots: {
        r: '2',
      },
      backgroundColor: '#fff',
      backgroundGradientFrom: '#fff',
      backgroundGradientTo: '#fff',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => (
        (data[0] > data[data.length - 1])
          ? `rgba(255, 0, 0, ${opacity})`
          : `rgba(94, 206, 177, ${opacity})`),
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    }}
  />
);

PerformanceChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PerformanceChart;
