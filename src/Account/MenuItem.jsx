import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const MenuItem = ({
  name,
  onPress,
  color = '#333',
}) => {
  return (
    <TouchableHighlight
      style={{
        flexDirection: 'row',
        flex: 1,
        padding: 15,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
      }}
      underlayColor="#eee"
      onPress={onPress}
    >
      <>
        <Text style={{ flex: 1, color }}>{name}</Text>
        <FontAwesome5 name="chevron-right" />
      </>
    </TouchableHighlight>
  );
};

export default MenuItem;
