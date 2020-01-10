import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import Row from '../common/Row';
import styles from './styles';

const AllocationPieChartLegend = ({ label, color }) => (
  <Row style={styles.pieChartLegend}>
    <View style={[
      styles.pieChartLegendColorIndicator,
      { backgroundColor: color },
    ]}
    />
    <Text style={styles.pieChartLegendLabel}>{label}</Text>
  </Row>
);

AllocationPieChartLegend.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default AllocationPieChartLegend;
