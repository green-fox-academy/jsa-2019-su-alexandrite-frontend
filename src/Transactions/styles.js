import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  stockIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  typeAndTime: { justifyContent: 'space-between' },
  typeAndTimeSymbol: { fontSize: 12 },
  typeAndTimeTime: { fontSize: 12, opacity: 0.5 },
  transactionItem: { justifyContent: 'space-between', padding: 15 },
  transactionAmount: { fontSize: 18, fontWeight: 'bold' },
  transactionAmountDetails: { fontSize: 12, opacity: 0.5 },
});
