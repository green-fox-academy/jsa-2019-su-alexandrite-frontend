import React from 'react';
import { PieChart } from 'react-native-svg-charts';
import PropTypes from 'prop-types';
import Row from '../common/Row';
import Column from '../common/Column';
import AllocationPieChartLegend from './AllocationPieChartLegend';
import styles from './styles';

const AllocationPieChart = ({ data }) => (
  <Row>
    <Column style={{ flex: 3 }}>
      <PieChart
        data={data}
        style={styles.pieChart}
        valueAccessor={({ item }) => item.value}
        padAngle={0}
        outerRadius="80%"
        innerRadius="50%"
        sort={(_, b) => (b.key === 'Other' ? 1 : 0)}
      />
    </Column>
    <Column style={{ flex: 2 }}>
      {data.map(({ key, svg: { fill: color } }) => (
        <AllocationPieChartLegend key={key} label={key} color={color} />
      ))}
    </Column>
  </Row>
);

AllocationPieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      shares: PropTypes.number,
    }),
  ).isRequired,
};

export default AllocationPieChart;
