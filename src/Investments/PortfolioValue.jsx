import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Card from '../common/Card';
import styles from './styles';

export default function PortfolioValue() {
  return (
    <Card style={styles.valueCard}>
      <FontAwesome
        size={18}
        name="money"
        color="#fff"
      />
      <Text style={styles.valueText}>Value</Text>
      <Text style={styles.valueNumber}>$ 3,400</Text>
      <Text>Total Investment</Text>
      <Text>INVESTMENT ACCOUNT</Text>
    </Card>
  );
}
