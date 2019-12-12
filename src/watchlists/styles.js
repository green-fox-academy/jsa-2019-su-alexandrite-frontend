import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  watchListTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  expandButton: {
    padding: 15,
    marginVertical: -15,
    marginRight: -15,
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
    justifyContent: 'space-between',
  },
  watchListItemColumnText: {
    fontSize: 12,
    color: '#666',
  },
  watchListCardTitle: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
    color: '#333',
  },
  addIcon: {
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
  watchlistField: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});
