import React from 'react';
import PropTypes from 'prop-types';
import NewsListItem from './NewsListItem';

const NewsMappedList = ({ news }) => (
  news.map((item, i) => (
    <NewsListItem
      key={item.id}
      item={item}
      style={[i !== news.length - 1 && { marginBottom: 15 }]}
    />
  ))
);

NewsMappedList.propTypes = {
  news: PropTypes.arrayOf(
    NewsListItem.propTypes.item,
  ),
};

NewsMappedList.defaultProps = {
  news: [],
};

export default NewsMappedList;
