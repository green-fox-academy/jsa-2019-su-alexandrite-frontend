import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import cardBackground from '../../assets/img/investment/card.png';

export default function PortfolioValue() {
  return (
    <ImageBackground source={cardBackground} style={styles.valueCard}>
      <View style={styles.value}>
        <FontAwesome
          size={22}
          name="money"
          color="#fff"
        />
        <Text style={styles.valueText}>Value</Text>
      </View>
      <View style={styles.total}>
        <Text style={styles.valueNumber}>$ 3,400</Text>
        <Text style={styles.totalText}>Total Investment</Text>
      </View>
      <Text style={styles.account}>INVESTMENT ACCOUNT</Text>
    </ImageBackground>
  );
}
