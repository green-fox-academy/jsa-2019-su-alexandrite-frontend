import React from 'react';
import {
  FlatList,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import NewsListItem from './NewsListItem';
import commonStyles from '../styles';

const NewsList = ({ news }) => (
  <FlatList
    data={news}
    keyExtractor={(item) => item.url}
    ItemSeparatorComponent={() => <View style={commonStyles.newsCardSeparator} />}
    renderItem={({ item }) => <NewsListItem item={item} />}
  />
);

NewsList.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape(NewsListItem.propTypes),
  ),
};

NewsList.defaultProps = {
  news: [],
};

export default NewsList;
