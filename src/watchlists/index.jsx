import React, { useState } from 'react';
import {
  ScrollView,
  TouchableHighlight,
  Image,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import WatchList from './WatchList';
import Popup from './Popup';
import addIcon from '../../assets/icons/watchList/add.png';
import styles from './styles';
import commonStyle from '../common/styles';

const navigationOptions = {
  title: 'WATCHLISTS',
};

const watchlistsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const watchLists = useSelector((state) => state.watchlists.watchlists);
  const { padding } = commonStyle.container;
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ padding }}>
        {watchLists.map((item) => (
          <WatchList key={item.id} name={item.name} />
        ))}
      </ScrollView>
      <Popup visible={modalVisible} toggle={setModalVisible} />
      <TouchableHighlight
        style={styles.addIcon}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Image source={addIcon} />
      </TouchableHighlight>
    </View>
  );
};

watchlistsScreen.navigationOptions = navigationOptions;

export default watchlistsScreen;
