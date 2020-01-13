import { StyleSheet } from 'react-native';
import { width } from '../common/styles';

export default StyleSheet.create({
  detailsContentContainer: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 15,
    backgroundColor: '#f2f3fb',
    flexDirection: 'row',
    width: width - 60,
    justifyContent: 'center',
    minHeight: 200,
  },
  detailsContentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsContentKey: {
    fontSize: 11,
    lineHeight: 30,
    letterSpacing: 0.21,
    color: '#7e92a3',
  },
  detailsContentVal: {
    fontSize: 11,
    lineHeight: 30,
    letterSpacing: 0.21,
    color: '#566ed3',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  perfChartContainer: {
    width: width - 60,
    minHeight: 200,
    justifyContent: 'center',
  },
  perfChartTimeRangeSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f2f3fb',
    marginTop: 10,
    borderRadius: 20,
    padding: 5,
  },
  perfChartButton: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
  },
  perfChartButtonActive: {
    backgroundColor: '#566ed3',
    elevation: 2,
    shadowColor: '#566ed3',
    shadowRadius: 2,
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 2,
    },
  },
  perfChartButtonText: {
    color: '#666',
    fontWeight: 'bold',
  },
  perfChartButtonTextActive: {
    color: '#fff',
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
