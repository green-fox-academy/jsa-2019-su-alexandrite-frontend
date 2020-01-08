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
  totalText: {
    color: '#fff',
    fontSize: 18,
    marginHorizontal: 22,
    marginTop: 20,
    marginBottom: 15,
  },
  valueNumber: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 22,
  },
  button: {
    marginRight: 20,
  },
  topUpInput: {
    flex: 1,
    color: 'black',
    fontSize: 12,
    borderColor: '#566ed3',
    borderRadius: 50,
  },
});
