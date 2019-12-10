import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import WatchListItem from './WatchListItem';
import chevron from '../../assets/icons/watchList/chevron.png';
import Card from '../common/Card';
import styles from './styles';

export default function watchlist({ item }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <Card>
      <View style={styles.watchListTitle}>
        <Text style={styles.watchListCardTitle}>{item.name}</Text>
        <TouchableHighlight onPress={handleClick} style={styles.expandButton} underlayColor="#0000" activeOpacity={0.5}>
          <Image
            source={chevron}
            style={{
              transform: [{ rotateZ: isOpen ? '90deg' : '0deg' }],
            }}
          />
        </TouchableHighlight>
      </View>
      {isOpen ? item.stocks.map((stock) => (
        <WatchListItem
          key={stock.id}
          ticker={stock.ticker}
          currPrice={stock.currPrice}
          dailyChange={stock.dailyChange}
          volumn={stock.volumn}
        />
      )) : null}
    </Card>
  );
}

watchlist.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    stocks: PropTypes.arrayOf(
      PropTypes.shape(
        WatchListItem.propTypes,
      ),
    ),
  }).isRequired,
};
