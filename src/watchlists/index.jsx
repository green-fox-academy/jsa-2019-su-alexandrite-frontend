import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

import commonStyles from '../common/styles';

const watchlists = () => {
  const { push } = useNavigation();
  return (
    <View style={commonStyles.container}>
      <Button title="DD" onPress={() => push('StockDetail', { symbol: 'MSFT' })} />
      <Text>This is the watchlists screen</Text>
    </View>
  );
};

watchlists.navigationOptions = {
  title: 'WATCHLISTS',
};

export default watchlists;
