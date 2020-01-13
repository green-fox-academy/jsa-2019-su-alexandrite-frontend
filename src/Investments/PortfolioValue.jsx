import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import { useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import cardBackground from '../../assets/img/investment/card.png';

export default function () {
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
              <View style={styles.value}>
                <FontAwesome size={22} name="money" color="#fff" />
                <Text style={styles.valueText}>Value</Text>
              </View>
              <Text style={styles.valueNumber}>{totalValue}</Text>
              <Text style={styles.totalText}>Total Investment</Text>
            </>
          )}
        </>
      ) : <Text>{error.message}</Text>}
    </ImageBackground>
  );
}
