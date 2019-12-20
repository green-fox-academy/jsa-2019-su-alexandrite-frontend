import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    alignItems: 'center',
    padding: 15,
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
    marginBottom: 15,
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
    width: width - 60,
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
    backgroundColor: 'rgba(0,0,0,.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: {
    width: 285,
    height: 280,
    backgroundColor: '#fff',
    borderRadius: 6,
  },
  popupHeader: {
    backgroundColor: '#4d63be',
    flexDirection: 'row',
    borderTopStartRadius: 6,
    borderTopRightRadius: 6,
    justifyContent: 'space-between',
  },
  popupTitle: {
    padding: 15,
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
  popupCloseButtonWrapper: {
    padding: 15,
    borderTopRightRadius: 6,
  },
  popupBody: {
    padding: 15,
    flex: 1,
    justifyContent: 'space-between',
  },
  popupButton: {
    height: 40,
    width: 255,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  popupButtonGroup: {
    flexDirection: 'column',
  },
  newsCard: {
    height: 169,
    backgroundColor: '#ccc',
    borderRadius: 6,
    overflow: 'hidden',
  },
  newsCardSeparator: {
    height: 15,
  },
  newsTime: {
    fontSize: 12,
    color: '#fff',
  },
  newsHeadline: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    lineHeight: 20,
  },
  newsCardOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 15,
  },
  newsContainer: {
    width: width - 60,
  },
  cardFooterButton: {
    padding: 5,
    borderRadius: 3,
  },
  cardFooterButtonText: {
    fontSize: 12,
    color: '#999',
  },
});
