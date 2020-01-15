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
  instrumentContainer: {
    width: width - 30,
  },
  companyTitle: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 15,
    backgroundColor: '#f2f3fb',
    flexDirection: 'row',
    width: width - 60,
    justifyContent: 'center',
  },
  companyLogo: {
    width: 50,
    height: 50,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#ccc',
  },
  companyInformation: {
    paddingLeft: 20,
  },
  companyName: {
    fontSize: 14,
    color: '#566ed3',
    fontWeight: 'bold',
  },
  companyDescription: {
    fontSize: 12,
    color: '#7e92a3',
    paddingTop: 12,
  },
  details: {
    paddingHorizontal: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  detailsColumn: {
    flex: 0,
    paddingTop: 22,
    minWidth: '30%',
  },
  detailNumber: {
    color: '#566ed3',
    fontSize: 14,
    fontWeight: 'bold',
  },
  detailLabel: {
    color: '#bebebe',
    fontSize: 10,
    paddingVertical: 5,
  },
  viewMoreButton: {
    padding: 5,
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  viewMoreText: {
    color: '#999',
    fontSize: 12,
  },
});
