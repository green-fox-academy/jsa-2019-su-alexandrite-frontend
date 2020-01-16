import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import { useNavigationParam, useNavigation } from 'react-navigation-hooks';
import { useSelector } from 'react-redux';
import commonStyles from '../common/styles';
import Stats from './Stats';
import addToWatchlistIcon from '../../assets/icons/header/add-to-wl.png';
import WatchlistPickerPopup from './WatchlistPickerPopup';
import Performance from './Performance';
import NewsCard from '../common/News/NewsCard';
import Row from '../common/Row';
import TransactionPopup from '../Order/TransactionPopup';

const StockDetails = () => {
  const symbol = useNavigationParam('symbol');
  const navigation = useNavigation();
  const { accessToken } = useSelector((state) => state.user);
  const [A2WPopupVisible, setA2WPopupVisible] = useState(false);
  const showAddToWatchlistPopup = () => setA2WPopupVisible(true);

  useEffect(() => {
    navigation.setParams({
      showAddToWatchlistPopup,
    });
  }, []);

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <ScrollView contentContainerStyle={[commonStyles.container, { paddingBottom: 100 }]}>
        <Performance symbol={symbol} />
        <Row>
          <Stats symbol={symbol} />
        </Row>
        <Row flex={1}>
          <NewsCard query={symbol} style={{ flex: 1 }} />
        </Row>
        <WatchlistPickerPopup
          symbol={symbol}
          visible={A2WPopupVisible}
          onClose={() => setA2WPopupVisible(false)}
        />
      </ScrollView>
      {accessToken && <TransactionPopup symbol={symbol} />}
    </View>
  );
};

StockDetails.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('symbol'),
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

export default StockDetails;
