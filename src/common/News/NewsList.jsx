import React, { useState } from 'react';
import {
  FlatList,
  View,
  ActivityIndicator,
} from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';
import PropTypes from 'prop-types';
import NewsListItem from './NewsListItem';
import commonStyles from '../styles';
import { useFetchStockNews } from './newsService';
import ErrorMessage from '../ErrorMessage';
import Card from '../Card';

const ListFooter = ({ errorMessage, isLoading, pageNumber }) => {
  if (pageNumber !== 1) {
    if (errorMessage) {
      return (
        <Card style={{ marginTop: 15 }}>
          <ErrorMessage message={errorMessage} />
        </Card>
      );
    }
    if (isLoading) {
      return (
        <View style={{ padding: 15 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return null;
  }
  return null;
};

const NewsList = () => {
  const query = useNavigationParam('query');
  const [pageNumber, setPageNumber] = useState(1);
  const {
    news, isLoading, error,
  } = useFetchStockNews(query, pageNumber);

  return (
    <FlatList
      contentContainerStyle={{ padding: 15 }}
      data={news}
      ListHeaderComponent={() => (error && pageNumber === 1 ? (
        <Card>
          <ErrorMessage message={error.message} />
        </Card>
      ) : null)}
      stickyHeaderIndices={[0]}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={commonStyles.newsCardSeparator} />}
      renderItem={({ item }) => <NewsListItem item={item} />}
      refreshing={pageNumber === 1 && isLoading}
      onRefresh={() => setPageNumber(1)}
      onEndReachedThreshold={0.9}
      onEndReached={() => setPageNumber(pageNumber + 1)}
      ListFooterComponent={(
        <ListFooter
          pageNumber={pageNumber}
          isLoading={isLoading}
          errorMessage={error && error.message}
        />
      )}
    />
  );
};

ListFooter.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
};

ListFooter.defaultProps = {
  errorMessage: null,
};


export default NewsList;
