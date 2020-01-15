import React from 'react';
import {
  ActivityIndicator,
} from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';
import InstrumentItem from './InstrumentItem';
import ErrorMessage from '../common/ErrorMessage';

const Instruments = () => {
  const {
    isLoading,
    stocks,
    instruments,
    error,
  } = useSelector((state) => state.investments);
  if (error) return <ErrorMessage message={error.message} />;
  if (isLoading) return <ActivityIndicator size="large" style={styles.loading} color="#fff" />;
  return (
    !isLoading && !error && stocks && (
      stocks.map(({ shares, symbol, entryPrice }, i) => (
        <InstrumentItem
          index={i}
          shares={shares}
          symbol={symbol}
          key={symbol}
          entryPrice={entryPrice}
          instrument={instruments[symbol]}
        />
      ))
    )
  );
};

export default Instruments;
