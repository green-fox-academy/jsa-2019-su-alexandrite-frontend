import React from 'react';
import PropTypes from 'prop-types';
import NewsListItem from './NewsListItem';

const NewsMappedList = ({ news }) => (
  news.map((item) => (
    <NewsListItem
      key={item.id}
      item={item}
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
