import React, { useState, useEffect } from 'react';
import {
  FlatList,
  View,
  ActivityIndicator,
} from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';
import NewsListItem from './NewsListItem';
import commonStyles from '../styles';
import { fetchStockNews } from './newsService';
import ErrorMessage from '../ErrorMessage';
import Card from '../Card';

const NewsList = () => {
  const query = useNavigationParam('query');
  const [news, setNews] = useState([]);
  const [pageNumber, setPageNumber] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState();
  const [laodingMoreError, setLoadingMoreError] = useState();

  const fetchInitList = () => {
    setIsLoading(true);
    setError(undefined);
    fetchStockNews(query, 1)
      .then((res) => {
        setNews(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  const fetchMore = () => {
    setIsLoadingMore(true);
    fetchStockNews(query, pageNumber)
      .then((res) => {
        setNews([...news, ...res]);
        setIsLoadingMore(false);
        setPageNumber(pageNumber + 1);
      })
      .catch((err) => {
        setLoadingMoreError(err);
        setIsLoadingMore(false);
      });
  };

  useEffect(() => {
    fetchInitList();
  }, []);

  return (
    <FlatList
      contentContainerStyle={{ padding: 15 }}
      data={news}
      ListHeaderComponent={() => (error ? (
        <Card>
          <ErrorMessage message={error.message} />
        </Card>
      ) : null)}
      stickyHeaderIndices={[0]}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={commonStyles.newsCardSeparator} />}
      renderItem={({ item }) => <NewsListItem item={item} />}
      refreshing={isLoading}
      onRefresh={fetchInitList}
      onEndReached={laodingMoreError ? () => null : fetchMore}
      onEndReachedThreshold={0.9}
      ListFooterComponent={(
        <>
          {isLoadingMore && <ActivityIndicator />}
          {laodingMoreError && <Card><ErrorMessage message={laodingMoreError.message} /></Card>}
        </>
      )}
    />
  );
};

export default NewsList;
