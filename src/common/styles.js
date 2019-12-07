import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    alignItems: 'center',
  },
  card: {
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      x: 0,
      y: 4,
    },
    shadowRadius: 6,
    padding: 15,
    margin: 15,
    backgroundColor: '#fff',
    borderRadius: 6,
  },
  cardTitle: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  column: {
    flexDirection: 'column',
    flex: 1,
  },
  errorMessageContainer: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 15,
    backgroundColor: '#fff6f6',
    width: width - 60,
  },
  errorMessageText: {
    color: '#9f3a38',
    fontWeight: 'bold',
  },
});
