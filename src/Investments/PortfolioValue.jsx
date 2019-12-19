import React, { useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserInvestmentShares, fetchStockPrice } from '../redux/investment/actionCreator';
import styles from './styles';
import cardBackground from '../../assets/img/investment/card.png';
import { round, addComma } from '../common/numbers';

export default function PortfolioValue() {
  const dispatch = useDispatch();
  const {
    isLoading,
    userShares,
    price,
    error,
  } = useSelector((state) => state.investments);

  useEffect(() => {
    dispatch(fetchUserInvestmentShares(1));
  }, []);

  useEffect(() => {
    if (userShares) {
      const symbols = userShares.stocks.map((stock) => stock.symbol);
      dispatch(fetchStockPrice(symbols));
    }
  }, [userShares]);

  function calculateInvsetmentsValue() {
    if (userShares && price) {
      const calculatedValue = userShares
        .stocks.map(({ shares, symbol }) => shares * price[symbol].price)
        .reduce((a, b) => a + b);
      return addComma(round(calculatedValue));
    }
    return 'loading...';
  }

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
              <Text style={styles.valueNumber}>
                {`$${calculateInvsetmentsValue()}`}
              </Text>
              <Text style={styles.totalText}>Total Investment</Text>
            </>
          )}
        </>
      ) : <Text>{error.message}</Text>}
    </ImageBackground>
  );
}
