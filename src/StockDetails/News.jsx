import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchStockNews } from '../redux/stock/actionCreator';
import style from './style';
import Card from '../common/Card';
import ErrorMessage from '../common/ErrorMessage';
import NewsMappedList from '../common/NewsMappedList';

const News = ({ symbol }) => {
  const dispatch = useDispatch();
  const {
    stockNewsData: news,
    loadingStockNews: loading,
    stockNewsError: error,
  } = useSelector((state) => state.stock);

  useEffect(() => {
    dispatch(fetchStockNews(symbol));
  }, []);

  return (
    <Card title="News">
      {!error ? (
        <View style={style.newsContainer}>
          {loading && <ActivityIndicator size="large" />}
          {!loading && news && (
            <NewsMappedList news={news} />
          )}
        </View>
      ) : <ErrorMessage message={error.message} />}
    </Card>
  );
};

News.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default News;
