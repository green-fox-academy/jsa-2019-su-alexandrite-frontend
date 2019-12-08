import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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

export default function watchlists({ name }) {
  const stocks = useSelector((state) => state.watchlists.stocks);
  const [flag, setFlag] = useState(true);

  function handleClick() {
    setFlag(!flag);
  }
  return (
    <Card>
      <View style={styles.watchListTitle}>
        <Text>{name}</Text>
        <TouchableHighlight onPress={handleClick}>
          <Image
            source={chevron}
            style={{
              transform: [{ rotateZ: flag ? '90deg' : '0deg' }],
            }}
          />
        </TouchableHighlight>
      </View>
      <View>
        {flag ? stocks.map((item) => (
          <WatchListItem
            key={item.id}
            stockName={item.stockName}
            curPrice={item.curPrice}
            fluctuation={item.fluctuation}
            dealAmount={item.dealAmount}
          />
        )) : null}
      </View>
    </Card>
  );
}

watchlists.propTypes = {
  name: PropTypes.string.isRequired,
};
