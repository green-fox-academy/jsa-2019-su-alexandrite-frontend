import React from 'react';
import { View } from 'react-native';
import propTypes from 'prop-types';
import TransactionButton from './TransactionButton';
import styles from './styles';

const TransactionSelector = ({ selected, onSelect }) => {
  const behaviros = ['sell', 'buy'];
  return (
    <View style={styles.TransactionSelector}>
      {behaviros.map((transactionBehavior) => {
        const active = selected === transactionBehavior;
        return (
          <TransactionButton
            key={transactionBehavior}
            transactionBehavior={transactionBehavior}
            active={active}
            onPress={() => onSelect(transactionBehavior)}
          />
        );
      })}
    </View>
  );
};

TransactionSelector.propTypes = {
  selected: propTypes.string.isRequired,
  onSelect: propTypes.func.isRequired,
};

export default TransactionSelector;
