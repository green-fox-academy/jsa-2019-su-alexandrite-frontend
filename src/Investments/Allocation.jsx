import React from 'react';
import {
  Text,
  ActivityIndicator,
} from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';
import Card from '../common/Card';
import AllocationPieChart from './AllocationPieChart';

const Allocation = () => {
  const {
    isLoading,
    allocation,
    error,
  } = useSelector((state) => state.investments);
  return (
    <Card title="Allocation" style={{ ...styles.pieChartContainer, marginTop: 15 }}>
      {!error ? (
        <>
          {isLoading && <ActivityIndicator size="large" />}
          {!isLoading && !error && allocation && (
            <AllocationPieChart data={allocation} />
          )}
        </>
      ) : <Text>{error.message}</Text>}
    </Card>
  );
};

export default Allocation;
