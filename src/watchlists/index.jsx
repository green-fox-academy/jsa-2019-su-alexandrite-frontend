import React, { useState } from 'react';
import { ScrollView, TouchableHighlight, Image } from 'react-native';
import { useSelector } from 'react-redux';
import WatchList from './WatchList';
import Popup from './Popup';
import addIcon from '../../assets/icons/watchList/add.png';
import styles from './styles';

const navigationOptions = {
  title: 'WATCHLISTS',
};

const watchlistsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const watchLists = useSelector((state) => state.watchlists.watchlists);
  return (
    <ScrollView style={styles.box}>
      {watchLists.map((item) => (
        <WatchList key={item.id} name={item.name} />
      ))}
      <Popup visible={modalVisible} toggle={setModalVisible} />
      <TouchableHighlight
        style={styles.addIcon}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Image source={addIcon} />
      </TouchableHighlight>
    </ScrollView>
  );
};

watchlistsScreen.navigationOptions = navigationOptions;

export default watchlistsScreen;
