import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

import commonStyles from '../common/styles';

const playground = () => {
  const { push } = useNavigation();
  return (
    <View style={commonStyles.container}>
      <Text>This is playground for development</Text>
      <Button title="MSFT" onPress={() => push('StockDetails', { symbol: 'MSFT' })} />
    </View>
  );
};

playground.navigationOptions = {
  title: 'Playground',
};

export default playground;
