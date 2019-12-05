import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

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
        <View>
          <Text>{info.symbol}</Text>
          <Text>{info.exchange}</Text>
        </View>
      ))}
    </View>
  );
};
