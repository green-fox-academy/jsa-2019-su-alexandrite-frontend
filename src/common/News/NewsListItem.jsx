import React from 'react';
import {
  Text,
  Image,
  ViewPropTypes,
  View,
} from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from 'react-navigation-hooks';
import Row from '../Row';
import Column from '../Column';
import commonStyle from '../styles';

const NewsListItem = ({ item, style }) => {
  const date = new Date(item.datetime);
  const { push } = useNavigation();
  return (
    <TouchableHighlight
      onPress={() => push('NewsWebView', { url: item.url })}
      underlayColor="#eee"
      style={[style, { flexDirection: 'row', paddingVertical: 15, flex: 1, borderBottomColor: '#eee', borderBottomWidth: 1 }]}
    >
      <>
        <Image
          source={item.image ? { uri: item.image } : null}
          style={commonStyle.newsImg}
        />
        <Column flex={1}>
          <Text style={commonStyle.newsHeadline} lineBreakMode="tail" numberOfLines={3}>{item.headline}</Text>
          <Text style={commonStyle.newsTime}>{date.toLocaleString()}</Text>
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
