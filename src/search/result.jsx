import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import styles from './styles';

import tradeIcon from '../../assets/icons/search-page/trade.png';
import detailIcon from '../../assets/icons/search-page/detail.png';

export default () => {
  const isLoading = useSelector((state) => state.search.isLoading);
  const searchResult = useSelector((state) => state.search.result);
  const error = useSelector((state) => state.search.error);

  if (isLoading) {
    return <Text>Loading</Text>;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }
  return (
    <View>
      {searchResult.map((info) => (
        <View key={info.symbol} style={styles.resultList}>
          <View>
            <Text style={styles.stockName}>{info.symbol}</Text>
            <Text style={styles.stockExchange}>{info.exchange}</Text>
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
      ))}
    </View>
  );
};
