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

const navigationOptions = {
  title: 'WATCHLISTS',
};

const watchlistsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const watchLists = useSelector((state) => state.watchlists.watchlists);
  return (
    <View style={styles.container}>
      <ScrollView>
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
