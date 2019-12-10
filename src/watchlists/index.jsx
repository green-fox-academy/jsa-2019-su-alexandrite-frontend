import React, { useState } from 'react';
import {
  TouchableHighlight,
  Image,
  View,
  FlatList,
} from 'react-native';
import { useSelector } from 'react-redux';
import WatchList from './WatchList';
import Popup from './Popup';
import addIcon from '../../assets/icons/watchList/add.png';
import styles from './styles';
import commonStyle from '../common/styles';

const navigationOptions = {
  title: 'Watchlists',
};

const watchlistsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { watchlists } = useSelector((state) => state.watchlists);
  const { padding } = commonStyle.container;
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ padding }}
        data={watchlists}
        keyExtractor={(item) => JSON.stringify(item.id)}
        renderItem={({ item }) => (
          <WatchList item={item} />
        )}
      />
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
