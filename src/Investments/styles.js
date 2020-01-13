import { StyleSheet } from 'react-native';
import { width } from '../common/styles';

export default StyleSheet.create({
  valueCard: {
    backgroundColor: '#766ef9',
    height: 170,
    borderRadius: 6,
    shadowColor: '#766ef9',
    shadowOffset: { height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.7,
    elevation: 6,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
  },
  valueText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
  },
  valueNumber: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  totalText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    opacity: 0.5,
  },
  loading: {
    marginTop: 70,
  },
  pieChart: {
    flex: 1,
    height: 135,
  },
  pieChartLegend: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  pieChartLegendColorIndicator: {
    height: 9,
    width: 9,
    borderRadius: 5,
    fontSize: 11,
    marginRight: 5,
  },
  pieChartLegendLabel: {
    fontSize: 11,
    color: '#485465',
  },
  pieChartContainer: {
    width: width - 30,
  },
});
