import React from 'react';
import {
  Text,
  ImageBackground,
  ViewPropTypes,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import commonStyle from '../styles';

const NewsListItem = ({ item, style }) => {
  const date = new Date(item.datetime);
  return (
    <ImageBackground
      source={item.image ? { uri: item.image } : null}
      style={[commonStyle.newsCard, style]}
    >
      <LinearGradient style={commonStyle.newsCardOverlay} colors={['#0000', '#0000', '#0008', '#000f']}>
        <Text style={commonStyle.newsTime}>{date.toLocaleString()}</Text>
        <Text style={commonStyle.newsHeadline}>{item.headline}</Text>
      </LinearGradient>
    </ImageBackground>
  );
};

NewsListItem.propTypes = {
  item: PropTypes.shape({
    datetime: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    headline: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  style: ViewPropTypes.style,
};

NewsListItem.defaultProps = {
  style: undefined,
};

export default NewsListItem;
