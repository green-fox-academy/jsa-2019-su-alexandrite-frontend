import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f4f6f8',
    alignItems: 'center',
    padding: 15,
    flexDirection: 'column',
  },
  card: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  cardTitle: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 15,
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
  },
  errorMessageText: {
    color: '#9f3a38',
    fontWeight: 'bold',
  },
  headerIcon: {
    padding: 15,
    paddingVertical: 10,
  },
  popupBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: {
    width: 300,
    height: 300,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#333',
    shadowRadius: 6,
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 3,
    },
  },
  popupHeader: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  popupTitle: {
    padding: 15,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  popupCloseButtonWrapper: {
    padding: 15,
  },
  popupBody: {
    padding: 15,
    flex: 1,
    justifyContent: 'space-between',
  },
  popupButton: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  popupButtonPrimary: {
    elevation: 2,
    backgroundColor: '#333',
    shadowColor: '#333',
    shadowRadius: 3,
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 3,
    },
  },
  newsItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    flex: 1,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  newsImg: {
    width: 120,
    height: 90,
    marginRight: 15,
    borderRadius: 6,
  },
  newsTime: {
    fontSize: 12,
    color: '#999',
  },
  newsHeadline: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    lineHeight: 20,
  },
  newsCardOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 15,
  },
  cardFooterButton: {
    padding: 5,
    borderRadius: 3,
  },
  cardFooterButtonText: {
    fontSize: 12,
    color: '#999',
  },
  progressBar: {
    height: 4,
    flexDirection: 'row',
    backgroundColor: '#eee',
  },
  tag: {
    backgroundColor: '#999',
    paddingHorizontal: 5,
    paddingVertical: 2,
    justifyContent: 'center',
    borderRadius: 3,
    marginRight: 5,
  },
  tagText: {
    fontSize: 9,
    color: '#fff',
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
});
