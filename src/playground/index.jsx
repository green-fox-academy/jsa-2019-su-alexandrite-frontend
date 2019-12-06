import React from 'react';
import { View, Text } from 'react-native';

import commonStyles from '../common/styles';

const playground = () => (
  <View style={commonStyles.container}>
    <Text>This is playground for development</Text>
  </View>
);

playground.navigationOptions = {
  title: 'Playground',
};

export default playground;
