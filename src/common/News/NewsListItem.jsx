import React from 'react';
import {
  Text,
  ImageBackground,
  ViewPropTypes,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from 'react-navigation-hooks';
import commonStyle from '../styles';

const NewsListItem = ({ item, style }) => {
  const date = new Date(item.datetime);
  const { push } = useNavigation();
  return (
    <TouchableHighlight
      onPress={() => push('NewsWebView', { url: item.url })}
      style={[style, { borderRadius: 6 }]}
    >
      <ImageBackground
        source={item.image ? { uri: item.image } : null}
        style={commonStyle.newsCard}
      >
        <LinearGradient style={commonStyle.newsCardOverlay} colors={['#0000', '#0000', '#0008', '#000f']}>
          <Text style={commonStyle.newsTime}>{date.toLocaleString()}</Text>
          <Text style={commonStyle.newsHeadline}>{item.headline}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableHighlight>
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
