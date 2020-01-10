import React from 'react';
import {
  Text,
  ActivityIndicator,
} from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';
import NewsCard from '../common/News/NewsCard';

const PortfolioNews = () => {
  const {
    isLoading,
    stocks,
    error,
  } = useSelector((state) => state.investments);

  return (
    !error ? (
      <>
        {isLoading && <ActivityIndicator size="large" style={styles.loading} color="#fff" />}
        {!isLoading && !error && stocks && (
          <NewsCard query={stocks.map(({ symbol }) => symbol)} style={{ marginTop: 15 }} />
        )}
      </>
    ) : <Text>{error.message}</Text>
  );
};

export default PortfolioNews;
