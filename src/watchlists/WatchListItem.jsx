import PropTypes from 'prop-types';
import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import tradeIcon from '../../assets/icons/watchList/trade.png';
import detailIcon from '../../assets/icons/watchList/detail.png';


export default function WatchListItem({
  ticker,
  currPrice,
  dailyChange,
  volumn,
}) {
  return (
    <View style={styles.watchListItem}>
      <View style={styles.watchListItemColumn}>
        <Text style={[styles.watchListItemColumnText, { fontWeight: 'bold', color: '#566ed3' }]}>
          {ticker}
        </Text>
      </View>
      <View style={styles.watchListItemColumn}>
        <Text style={styles.watchListItemColumnText}>
          {currPrice}
        </Text>
      </View>
      <View style={styles.watchListItemColumn}>
        {dailyChange > 0 ? (
          <Text style={[styles.watchListItemColumnText, { color: '#21af78' }]}>
            {`+${dailyChange}%`}
          </Text>
        ) : (
          <Text style={[styles.watchListItemColumnText, { color: '#d82f2f' }]}>
            {`${dailyChange}%`}
          </Text>
        )}
      </View>
      <View style={styles.watchListItemColumn}>
        <Text style={styles.watchListItemColumnText}>
          {volumn}
        </Text>
      </View>
      <View style={[styles.watchListItemColumn, { flexDirection: 'row' }]}>
        <Image source={tradeIcon} />
        <Image source={detailIcon} />
      </View>
    </View>
  );
}

WatchListItem.propTypes = {
  ticker: PropTypes.string.isRequired,
  currPrice: PropTypes.number.isRequired,
  dailyChange: PropTypes.number.isRequired,
  volumn: PropTypes.string.isRequired,
};
