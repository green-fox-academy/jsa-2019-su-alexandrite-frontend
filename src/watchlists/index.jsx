import React, { useState } from 'react';
import {
  TouchableHighlight,
  Image,
  View,
  FlatList,
<<<<<<< HEAD
  TextInput,
=======
  Text,
>>>>>>> JSAAL-13 user can delete watchlists
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import WatchList from './WatchList';
import Popup from '../common/Popup';
import addIcon from '../../assets/icons/watchList/add.png';
import styles from './styles';
import commonStyle from '../common/styles';
import SearchButton from '../common/HeaderSearchButton';
import { postWatchList } from '../redux/watchList/actionCreator';

import watchListAction from '../redux/watchList/actionCreator';

const navigationOptions = {
  title: 'Watchlists',
  headerRight: () => <SearchButton />,
};

const watchlistsScreen = () => {
  const [popupVisible, setModalVisible] = useState(false);
  const [watchListTitle, setWatchListTitle] = useState('');
  const dispatch = useDispatch();
  const { watchlists } = useSelector((state) => state.watchlists);
  const { padding } = commonStyle.container;

  const onCloseAddModal = () => {
    setModalVisible(false);
    setWatchListTitle('');
  };

  const onConfirmAddModal = () => {
    if (watchListTitle) dispatch(postWatchList(watchListTitle));
    setModalVisible(false);
    setWatchListTitle('');
  };
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ padding, paddingBottom: 60 }}
        data={watchlists}
        keyExtractor={(item) => JSON.stringify(item.id)}
        renderItem={({ item }) => (
          <View>
            <WatchList item={item} />
            <TouchableHighlight onPress={() => {
              dispatch(watchListAction.deleteWatchList(item.id));
            }}
            >
              <Text>delete</Text>
            </TouchableHighlight>
          </View>
        )}
      />
      <Popup
        visible={popupVisible}
        onCancel={onCloseAddModal}
        onConfirm={onConfirmAddModal}
        title="Create a watchlist"
        confirmButtonText="Add"
        confirmDisabled={!watchListTitle}
      >
        <TextInput style={styles.watchlistField} placeholder="Watchlist Name" onChangeText={(text) => setWatchListTitle(text)} />
      </Popup>
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
