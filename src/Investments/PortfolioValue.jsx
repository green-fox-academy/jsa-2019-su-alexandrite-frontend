import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import cardBackground from '../../assets/img/investment/card.png';
import { round, addComma } from '../common/numbers';

export default function PortfolioValue({
  isLoading,
  userShares,
  price,
  error,
}) {
  const calculateInvsetmentsValue = () => {
    if (userShares && price) {
      const calculatedValue = userShares
        .stocks.map(({ shares, symbol }) => shares * price[symbol].price)
        .reduce((a, b) => a + b);
      return addComma(round(calculatedValue));
    }
    return 'loading...';
  };

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

PortfolioValue.defaultProps = {
  userShares: undefined,
  price: undefined,
};

PortfolioValue.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  userShares: PropTypes.shape({
    stocks: PropTypes.arrayOf(
      PropTypes.shape({
        symbol: PropTypes.string.isRequired,
        shares: PropTypes.number.isRequired,
      }),
    ),
  }),
  price: PropTypes.shape(),
  error: PropTypes.string.isRequired,
};
