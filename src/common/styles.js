import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    elevation: 3,
  },
  cardTitle: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
});
