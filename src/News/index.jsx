import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import NewsList from '../common/News/NewsList';
import { fetchInvestedStocks } from '../redux/news/actionCreator';
import Column from '../common/Column';

const News = () => {
  const { symbols, isLoading } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInvestedStocks());
  }, []);
  if (isLoading || !symbols.length) return <Column flex={1} style={{ justifyContent: 'center' }}><ActivityIndicator /></Column>;
  return <NewsList propQuery={symbols} />;
};

News.navigationOptions = {
  title: 'NEWS',
};

export default News;
