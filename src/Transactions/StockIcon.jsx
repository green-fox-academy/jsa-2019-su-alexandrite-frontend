import React from 'react';
import {
  Text, View,
} from 'react-native';
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';
import Column from '../common/Column';

const StockIcon = ({ symbol }) => (
  <Column>
    <View style={[
      styles.stockIcon,
      {
        backgroundColor: randomColor({
          seed: symbol || 'wallet',
        }),
      }]}
    >
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>
        {symbol || <FontAwesome5 name="wallet" />}
      </Text>
    </View>
  </Column>
);

StockIcon.propTypes = {
  symbol: PropTypes.string,
};

StockIcon.defaultProps = {
  symbol: undefined,
};

export default StockIcon;
