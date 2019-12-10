import PropTypes from 'prop-types';
import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import tradeIcon from '../../assets/icons/watchList/trade.png';
import detailIcon from '../../assets/icons/watchList/detail.png';


export default function watchListItem({
  stockName,
  curPrice,
  fluctuation,
  dealAmount,
}) {
  return (
    <View style={styles.watchListItem}>
      <View style={styles.watchListItemColumn}>
        <Text style={[styles.watchListItemColumnText, { fontWeight: 'bold', color: '#566ed3' }]}>
          {stockName}
        </Text>
      </View>
      <View style={styles.watchListItemColumn}>
        <Text style={styles.watchListItemColumnText}>
          {curPrice}
        </Text>
      </View>
      <View style={styles.watchListItemColumn}>
        <Text style={[styles.watchListItemColumnText, { color: fluctuation > 0 ? '#21af78' : '#d82f2f' }]}>
          {`${fluctuation > 0 ? '+' : ''}${fluctuation}%`}
        </Text>
      </View>
      <View style={styles.watchListItemColumn}>
        <Text style={styles.watchListItemColumnText}>
          {dealAmount}
        </Text>
      </View>
      <View style={[styles.watchListItemColumn, { flexDirection: 'row' }]}>
        <Image source={tradeIcon} />
        <Image source={detailIcon} />
      </View>
    </View>
  );
}

watchListItem.propTypes = {
  stockName: PropTypes.string.isRequired,
  curPrice: PropTypes.number.isRequired,
  fluctuation: PropTypes.number.isRequired,
  dealAmount: PropTypes.string.isRequired,
};
