import React, { useEffect, useState } from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableHighlight,
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import cardBackground from '../../assets/img/investment/card.png';
import styles from './styles';
import TopUpPopup from './TopUpPopup';

export default function Balance() {
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
      <ImageBackground
        source={cardBackground}
        style={styles.valueCard}
        imageStyle={{ borderRadius: 6 }}
      >
        <Text style={styles.totalText}>Balance</Text>
        <Text style={styles.valueNumber}>1000</Text>
        <TouchableHighlight style={styles.button} onPress={fn}>
          <Text>top-up</Text>
        </TouchableHighlight>
      </ImageBackground>
      <TopUpPopup
        visible={A2WPopupVisible}
        onClose={() => setA2WPopupVisible(false)}
      />
    </View>
  );
}
