import React from 'react';
import {
  Text,
  Image,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from 'react-navigation-hooks';
import Column from '../Column';
import commonStyles from '../styles';

const NewsListItem = ({ item, style }) => {
  const date = new Date(item.datetime);
  const { push } = useNavigation();
  return (
    <TouchableHighlight
      onPress={() => push('NewsWebView', { url: item.url })}
      underlayColor="#eee"
      style={[style, commonStyles.newsItem]}
    >
      <>
        <Image
          source={item.image ? { uri: item.image } : null}
          style={commonStyles.newsImg}
        />
        <Column flex={1} style={{ justifyContent: 'space-between' }}>
          <Text style={commonStyles.newsHeadline} lineBreakMode="tail" numberOfLines={3}>{item.headline}</Text>
          <Text style={commonStyles.newsTime}>{date.toLocaleString()}</Text>
        </Column>
      </>
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
