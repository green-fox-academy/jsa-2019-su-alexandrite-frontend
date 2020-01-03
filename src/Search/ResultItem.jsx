import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { TouchableHighlight } from 'react-native-gesture-handler';
import styles from './styles';

import tradeIcon from '../../assets/icons/search-page/trade.png';
import detailIcon from '../../assets/icons/search-page/detail.png';

const ResultItem = ({ symbol, exchange }) => {
  const { push } = useNavigation();
  return (
    <View style={styles.resultList}>
      <View>
        <Text style={styles.stockName}>{symbol}</Text>
        <Text style={styles.stockExchange}>{exchange}</Text>
      </View>
      <View style={styles.resultButton}>
        <TouchableHighlight>
          <Image source={tradeIcon} />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.detailButton}
          onPress={() => push('StockDetails', { symbol })}
          activeOpacity={0.5}
          underlayColor="#0000"
        >
          <Image source={detailIcon} />
        </TouchableHighlight>
      </View>
    </View>
  );
};

ResultItem.propTypes = {
  symbol: PropTypes.string.isRequired,
  exchange: PropTypes.string.isRequired,
};

export default ResultItem;
