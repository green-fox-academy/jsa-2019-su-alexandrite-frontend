import React from 'react';
import {
  FlatList,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import NewsCard from './NewsCard';
import commonStyles from './styles';

const NewsList = ({ news }) => (
  <FlatList
    data={news}
    keyExtractor={(item) => item.url}
    ItemSeparatorComponent={() => <View style={commonStyles.newsCardSeparator} />}
    renderItem={({ item }) => <NewsCard item={item} />}
  />
);

NewsList.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape(NewsCard.propTypes),
  ),
};

NewsList.defaultProps = {
  news: [],
};


export default NewsList;
