import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  sharesField: {
    flex: 1,
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  TransactionSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eee',
    borderRadius: 30,
    padding: 2,
  },
  TransactionButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 30,
  },
  TransactionButtonActive: {
    backgroundColor: '#333',
  },
  TransactionButtonText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 12,
  },
  TransactionButtonTextActive: {
    color: '#fff',
  },
});
