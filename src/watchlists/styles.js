import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  watchListTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  watchListItem: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    padding: 10,
  },
  watchListItemColumn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  watchListItemColumnText: {
    fontSize: 12,
    color: '#666',
  },
  box: {
    position: 'relative',
  },
  addIcon: {
    right: 0,
    bottom: 0,
  },
  watchListInput: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
