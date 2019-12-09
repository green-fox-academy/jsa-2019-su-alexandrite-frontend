import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import styles from './styles';

import tradeIcon from '../../assets/icons/search-page/trade.png';
import detailIcon from '../../assets/icons/search-page/detail.png';

const ResultItem = ({ symbol, exchange }) => (
  <View style={styles.resultList}>
    <View>
      <Text style={styles.stockName}>{symbol}</Text>
      <Text style={styles.stockExchange}>{exchange}</Text>
    </View>
    <View style={styles.resultButton}>
      <TouchableHighlight>
        <Image source={tradeIcon} />
      </TouchableHighlight>
      <TouchableHighlight style={styles.detailButton}>
        <Image source={detailIcon} />
      </TouchableHighlight>
    </View>
  </View>
);

ResultItem.propTypes = {
  symbol: PropTypes.string.isRequired,
  exchange: PropTypes.string.isRequired,
};

export default () => {
  const isLoading = useSelector((state) => state.search.isLoading);
  const searchResult = useSelector((state) => state.search.result);
  const error = useSelector((state) => state.search.error);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }
  return (
    <FlatList
      data={searchResult}
      renderItem={({ item }) => <ResultItem symbol={item.symbol} exchange={item.exchange} />}
      keyExtractor={(info) => info.symbol}
    />
  );
};
