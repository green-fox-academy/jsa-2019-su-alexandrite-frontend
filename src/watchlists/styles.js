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
    // flexDirection: 'row',
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
  watchListInput: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 285,
    height: 280,
    backgroundColor:
      '#fff',
    borderRadius: 6,
  },
  modalHeader: {
    backgroundColor: '#4d63be',
    flexDirection: 'row',
    borderTopStartRadius: 6,
    borderTopRightRadius: 6,
    justifyContent: 'space-between',
  },
  modalTitle: {
    padding: 15,
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
  modalCloseButtonWrapper: {
    padding: 15,
    borderTopRightRadius: 6,
  },
  modalBody: {
    padding: 15,
    flex: 1,
    justifyContent: 'space-between',
  },
  modalTextField: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalButton: {
    height: 40,
    width: 255,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  modalButtonGroup: {
    flexDirection: 'column',
  },
});
