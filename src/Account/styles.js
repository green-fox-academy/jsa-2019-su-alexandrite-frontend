import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 15,
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
  },
});
