import { StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  headContainer: {
    ...(Platform.OS === 'android' && { paddingTop: Constants.statusBarHeight }),
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
    margin: -10,
    alignItems: 'center',
  },
  detailButton: {
    padding: 10,
    marginLeft: 26,
  },
  noResult: {
    marginTop: 20,
    textAlign: 'center',
  },
  isLoading: {
    flex: 1,
    margin: 40,
  },
});
