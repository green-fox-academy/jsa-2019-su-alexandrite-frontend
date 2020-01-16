import React, { useState } from 'react';
import {
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';
import PropTypes from 'prop-types';
import NewsListItem from './NewsListItem';
import useFetchStockNews from './useFetchStockNews';
import ErrorMessage from '../ErrorMessage';
import Card from '../Card';
import Row from '../Row';

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
        <Row style={{ padding: 15, justifyContent: 'center' }}>
          <ActivityIndicator />
        </Row>
      );
    }
    return null;
  }
  return null;
};

const NewsList = ({ propQuery }) => {
  const query = propQuery || useNavigationParam('query');
  const [pageNumber, setPageNumber] = useState(1);
  const { news, isLoading, error } = useFetchStockNews(query, pageNumber);

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

NewsList.propTypes = {
  propQuery: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

NewsList.defaultProps = {
  propQuery: undefined,
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
