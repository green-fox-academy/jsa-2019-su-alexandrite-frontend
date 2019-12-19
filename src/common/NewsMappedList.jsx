import React from 'react';
import PropTypes from 'prop-types';
import NewsCard from './NewsCard';

const NewsMappedList = ({ news }) => (
  news.map((item, i) => (
    <NewsCard
      key={item.url}
      item={item}
      style={[i !== news.length - 1 && { marginBottom: 15 }]}
    />
  ))
);

NewsMappedList.propTypes = {
  news: PropTypes.arrayOf(
    NewsCard.propTypes.item,
  ),
};

NewsMappedList.defaultProps = {
  news: [],
};

export default NewsMappedList;
