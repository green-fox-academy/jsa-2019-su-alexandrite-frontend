import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  detailsContentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsContentCell: {
    alignItems: 'center',
    marginBottom: 15,
    width: '33%',
  },
  detailsContentKey: {
    fontSize: 12,
    lineHeight: 18,
    color: '#999',
  },
  detailsContentVal: {
    fontSize: 18,
    lineHeight: 25,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  perfChartTimeRangeSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingTop: 15,
  },
  perfChartButton: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    flexDirection: 'row',
  },
  perfChartButtonText: {
    color: '#333',
    opacity: 0.2,
    fontWeight: 'bold',
  },
  perfChartButtonTextActive: {
    opacity: 1,
  },
  price: { fontSize: 36, lineHeight: 46, fontWeight: 'bold' },
  priceDate: {
    fontSize: 12,
    lineHeight: 18,
    color: '#999',
    textAlign: 'center',
  },
});
