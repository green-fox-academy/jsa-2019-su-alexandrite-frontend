import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import { useNavigationParam, useNavigation } from 'react-navigation-hooks';
import commonStyles from '../common/styles';
import Stats from './Stats';
import addToWatchlistIcon from '../../assets/icons/header/add-to-wl.png';
import WatchlistPickerPopup from './WatchlistPickerPopup';
import Performance from './Performance';

const stockDetails = () => {
  const symbol = useNavigationParam('symbol');
  const navigation = useNavigation();
  const [A2WPopupVisible, setA2WPopupVisible] = useState(false);
  const showAddToWatchlistPopup = () => setA2WPopupVisible(true);
  useEffect(() => {
    navigation.setParams({
      showAddToWatchlistPopup,
    });
  }, []);


  const { backgroundColor, flex, ...rest } = commonStyles.container;
  return (
    <ScrollView style={{ backgroundColor, flex }} contentContainerStyle={rest}>
      <Performance symbol={symbol} />
      <Stats symbol={symbol} />
      <WatchlistPickerPopup
        symbol={symbol}
        visible={A2WPopupVisible}
        onClose={() => setA2WPopupVisible(false)}
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
      <TouchableHighlight
        onPress={fn}
        underlayColor="#0000"
        activeOpacity={0.5}
        style={commonStyles.headerIcon}
      >
        <Image source={addToWatchlistIcon} />
      </TouchableHighlight>
    );
  },
});

export default stockDetails;
