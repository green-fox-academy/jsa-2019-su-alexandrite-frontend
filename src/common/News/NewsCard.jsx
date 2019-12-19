import React, { useEffect, useState } from 'react';
import {
  View,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import { fetchStockNews } from './newsService';
import style from '../../StockDetails/style';
import Card from '../Card';
import ErrorMessage from '../ErrorMessage';
import NewsMappedList from './NewsMappedList';

const NewsCard = ({ query }) => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    setIsLoading(true);
    setError(undefined);
    fetchStockNews(query)
      .then((res) => {
        setNews(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <Card title="News">
      {!error ? (
        <View style={style.newsContainer}>
          {isLoading && <ActivityIndicator size="large" />}
          {!isLoading && news && (
            <NewsMappedList news={news} />
          )}
        </View>
      ) : <ErrorMessage message={error.message} />}
    </Card>
  );
};

NewsCard.propTypes = {
  query: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

export default NewsCard;
