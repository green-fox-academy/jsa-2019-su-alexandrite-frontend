import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

export default function watchListItem({
  stockName,
  curPrice,
  fluctuation,
  dealAmount,
}) {
  return (
    <View>
      <Text>
        {stockName}
        {curPrice}
        {fluctuation}
        {dealAmount}
      </Text>
    </View>
  );
}

watchListItem.propTypes = {
  stockName: PropTypes.string.isRequired,
  curPrice: PropTypes.number.isRequired,
  fluctuation: PropTypes.string.isRequired,
  dealAmount: PropTypes.string.isRequired,
};
