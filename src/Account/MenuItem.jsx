import React from 'react';
import {
  Text,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome5 } from '@expo/vector-icons';

const MenuItem = ({
  name,
  onPress,
  color = '#333',
}) => (
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

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string,
};

MenuItem.defaultProps = {
  color: '#333',
};

export default MenuItem;
