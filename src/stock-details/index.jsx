import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import { useNavigationParam, useNavigation } from 'react-navigation-hooks';
import { useDispatch, useSelector } from 'react-redux';
import commonStyles from '../common/styles';
import Stats from './Stats';
import addToWatchlistIcon from '../../assets/icons/header/add-to-wl.png';
import stockActions from '../redux/stock/actionCreator';
import Popup from '../common/Popup';

const stockDetails = () => {
  const symbol = useNavigationParam('symbol');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [A2WPopupVisible, setA2WPopupVisible] = useState(false)
  const showAddToWatchlistPopup = () => setA2WPopupVisible(true);
  useEffect(() => {
    navigation.setParams({
      showAddToWatchlistPopup,
    });
  }, []);

  const { backgroundColor } = commonStyles.container;
  return (
    <ScrollView style={{ backgroundColor }} contentContainerStyle={commonStyles.container}>
      <Stats symbol={symbol} />
      <Popup
        visible={A2WPopupVisible}
        title={`Add ${symbol} to watchlist`}
        onCancel={() => setA2WPopupVisible(false)}
        confirmButtonText="OK"
      />
    </ScrollView>
  );
};

stockDetails.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('symbol'),
  headerStyle: {
    backgroundColor: '#566ed3',
  },
  headerTintColor: '#fff',
  headerRight: () => {
    const fn = navigation.getParam('showAddToWatchlistPopup');
    return (
      <TouchableHighlight onPress={fn}>
        <Image source={addToWatchlistIcon} />
      </TouchableHighlight>
    );
  },
});

export default stockDetails;
