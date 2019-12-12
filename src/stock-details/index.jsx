import React from 'react';
import {
  Image,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';
import commonStyles from '../common/styles';
import Stats from './Stats';
import addToWatchlistIcon from '../../assets/icons/header/add-to-wl.png';

const stockDetails = () => {
  const symbol = useNavigationParam('symbol');
  const { backgroundColor } = commonStyles.container;
  return (
    <ScrollView style={{ backgroundColor }} contentContainerStyle={commonStyles.container}>
      <Stats symbol={symbol} />
    </ScrollView>
  );
};

stockDetails.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('symbol'),
  headerStyle: {
    backgroundColor: '#566ed3',
  },
  headerTintColor: '#fff',
  headerRight: () => (
    <TouchableHighlight>
      <Image source={addToWatchlistIcon} />
    </TouchableHighlight>
  ),
});

export default stockDetails;
