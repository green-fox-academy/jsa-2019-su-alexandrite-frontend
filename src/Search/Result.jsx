import React from 'react';
import { useSelector } from 'react-redux';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import styles from './styles';
import ResultItem from './ResultItem';

export default () => {
  const {
    isLoading,
    result,
    error,
    touched,
  } = useSelector((state) => state.search);

  if (touched && result.length === 0) {
    return <Text style={styles.noResult}>No Result</Text>;
  }
  return (
    <View>
      {!error ? (
        <>
          {isLoading && <ActivityIndicator size="large" style={styles.isLoading} />}
          {!isLoading && !error && (
            <FlatList
              data={result}
              renderItem={({ item }) => (
                <ResultItem
                  symbol={item.symbol}
                  exchange={item.exchange}
                />
              )}
              keyExtractor={(info) => info.symbol}
            />
          )}
        </>
      ) : <Text>{error.message}</Text>}
    </View>
  );
};
