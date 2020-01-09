import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import Card from '../common/Card';

const Instruments = () => {
  return (
    <Card title="Instruments">
      <TouchableHighlight>
        <Text>Details</Text>
      </TouchableHighlight>
      <View>
        <Text>Company</Text>
        <Text>description</Text>
      </View>
      <View>
        <Text>Positions</Text>
        <Text>Market Value</Text>
        <Text>Unrizd P/L%</Text>
        <Text>Unrizd P/L</Text>
      </View>
    </Card>
  );
};

export default Instruments;
