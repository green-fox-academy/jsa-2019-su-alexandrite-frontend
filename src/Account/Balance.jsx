import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { useSelector } from 'react-redux';
import styles from './styles';
import TopUpPopup from './TopUpPopup';

export default function Balance() {
  const { balance } = useSelector((state) => state.user);
  const navigation = useNavigation();
  const [A2WPopupVisible, setA2WPopupVisible] = useState(false);
  const showTopUpPopup = () => setA2WPopupVisible(true);

  useEffect(() => {
    navigation.setParams({
      showTopUpPopup,
    });
  }, []);

  const fn = navigation.getParam('showTopUpPopup');

  return (
    <View>
      <Text style={styles.totalText}>Trading Account Balance</Text>
      <Text style={styles.valueNumber}>{balance}</Text>
      <TouchableHighlight
        style={styles.topUpbutton}
        onPress={fn}
        underlayColor="#0000"
        activeOpacity={0.5}
      >
        <Text style={styles.topUpbuttonText}>TOP-UP</Text>
      </TouchableHighlight>
      <TopUpPopup
        visible={A2WPopupVisible}
        onClose={() => setA2WPopupVisible(false)}
      />
    </View>
  );
}
