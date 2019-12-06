import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Image } from 'react-native';

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
        <View
          key={info.symbol}
          style={{
            paddingHorizontal: 17,
            paddingVertical: 11,
            borderBottomColor: '#eeeeee',
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View>
            <Text style={{ fontSize: 12 }}>{info.symbol}</Text>
            <Text style={{ fontSize: 10, color: '#999999' }}>{info.exchange}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image source={tradeIcon} />
            <Image style={{ marginLeft: 26 }} source={detailIcon} />
          </View>
        </View>
      ))}
    </View>
  );
};
