import React from 'react';
import { TouchableHighlight } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './styles';

const FAB = ({ onPress, iconName }) => (
  <TouchableHighlight
    style={styles.FAB}
    onPress={onPress}
    underlayColor="#999"
    activeOpacity={0.5}
  >
    <FontAwesome5 name={iconName} color="#fff" size={16} />
  </TouchableHighlight>
);

FAB.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default FAB;
