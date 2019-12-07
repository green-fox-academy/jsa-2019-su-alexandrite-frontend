import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  headContainer: {
    backgroundColor: '#566ed3',
  },
  searchContainer: {
    padding: 15,
    flexDirection: 'row',
  },
  searchBar: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 11,
    paddingVertical: 8,
    fontSize: 12,
    borderRadius: 50,
  },
  cancelButton: {
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  resultList: {
    paddingHorizontal: 17,
    paddingVertical: 11,
    borderBottomColor: '#eeeeee',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stockName: {
    fontSize: 12,
  },
  stockExchange: {
    fontSize: 10,
    color: '#999999',
  },
  resultButton: {
    flexDirection: 'row',
  },
  detailButton: {
    marginLeft: 26,
  },
});
