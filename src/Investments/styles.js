import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  valueCard: {
    backgroundColor: '#766ef9',
    height: 170,
    width: Math.round(Dimensions.get('window').width) - 30,
    borderRadius: 6,
    shadowColor: '#766ef9',
    shadowOffset: { height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.7,
    elevation: 6,
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 15,
    marginBottom: 6,
    marginRight: 22,
    alignItems: 'center',
  },
  valueText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 5,
  },
  valueNumber: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 22,
  },
  totalText: {
    color: '#fff',
    fontSize: 18,
    marginHorizontal: 22,
    marginTop: 20,
    marginBottom: 15,
  },
  loading: {
    marginTop: 70,
  },
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
