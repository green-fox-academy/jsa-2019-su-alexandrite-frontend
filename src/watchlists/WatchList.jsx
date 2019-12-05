import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Image, TouchableHighlight } from 'react-native';
import WatchListItem from './WatchListItem';
import chevron from '../../assets/icons/watchList/chevron.png';
import { fetchWatchList } from '../redux/watchList/actionCreator';

export default function watchlists() {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlists.stocks);
  const [flag, setFlag] = useState(true);


  function handleClick() {
    setFlag(!flag);
    console.log(flag);
  }
  return (
    <View>
      <View>
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
        {flag ? watchlist.map((item) => (
          <WatchListItem
            key={item.id}
            stockName={item.stockName}
            curPrice={item.curPrice}
            fluctuation={item.fluctuation}
            dealAmount={item.dealAmount}
          />
        )) : null}
      </View>
    </View>
  );
}
