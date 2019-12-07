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
});
