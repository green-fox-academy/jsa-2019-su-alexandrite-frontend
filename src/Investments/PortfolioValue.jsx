import React from 'react';
import {
  Text,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';
import cardBackground from '../../assets/img/investment/card.png';

export default function PortfolioValue() {
  const {
    isLoading,
    totalValue,
    error,
  } = useSelector((state) => state.investments);

  return (
    <ImageBackground
      source={cardBackground}
      style={styles.valueCard}
      imageStyle={{ borderRadius: 6 }}
    >
      {!error ? (
        <>
          {isLoading && <ActivityIndicator size="large" style={styles.loading} color="#fff" />}
          {!isLoading && !error && (
            <>
              <Text style={styles.totalText}>Total Investment</Text>
              <Text style={styles.valueNumber}>{totalValue}</Text>
            </>
          )}
        </>
      ) : <Text>{error.message}</Text>}
    </ImageBackground>
  );
}
