import React from 'react';
import {

  ScrollView,
} from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';
import commonStyles from '../common/styles';
import Stats from './Stats';

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
});

export default stockDetails;
