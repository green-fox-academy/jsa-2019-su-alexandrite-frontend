<<<<<<< HEAD
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textInput: {
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 15,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: '#eee',
    fontSize: 16,
    marginHorizontal: 15,
  },
  button: {
    marginTop: 50,
    backgroundColor: '#566ed3',
    borderRadius: 50,
    width: 60,
    height: 60,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#566ed3',
    shadowOffset: {
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  loginTitle: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  inputContainer: {
    flex: 1,
  },
  logOutButton: {
    borderRadius: 5,
    backgroundColor: '#566ed3',
  },
  errorMessageContainer: {
    paddingTop: 10,
    alignItems: 'center',
  },
  errorMessage: {
    color: '#9f3a38',
    fontSize: 15,
=======
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
>>>>>>> 892c6b2... JSAAL-63 top-up frontend
  },
});
