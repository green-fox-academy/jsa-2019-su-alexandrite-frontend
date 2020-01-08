import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

import commonStyles from '../common/styles';

const Playground = () => {
  const { push } = useNavigation();
  return (
    <View style={commonStyles.container}>
      <Text>This is playground for development</Text>
      <Button title="MSFT" onPress={() => push('StockDetails', { symbol: 'MSFT' })} />
      <Button title="search" onPress={() => push('Search')} />
    </View>
  );
};

Playground.navigationOptions = {
  title: 'Playground',
};

export default Playground;
