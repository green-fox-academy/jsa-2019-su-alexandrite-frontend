import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  sharesField: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  TransactionSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f2f3fb',
    marginTop: 10,
    borderRadius: 20,
    padding: 5,
  },
  TransactionButton: {
    paddingHorizontal: 50,
    paddingVertical: 5,
    borderRadius: 10,
  },
  TransactionButtonActive: {
    backgroundColor: '#566ed3',
    elevation: 0,
    shadowColor: '#566ed3',
    shadowRadius: 2,
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 2,
    },
  },
  TransactionButtonText: {
    color: '#666',
    fontWeight: 'bold',
  },
  TransactionButtonTextActive: {
    color: '#fff',
  },
});
