import React, { useState, useEffect } from 'react';
import {
  TouchableHighlight,
  Image,
  View,
  FlatList,
  TextInput,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import WatchList from './WatchList';
import Popup from '../common/Popup';
import addIcon from '../../assets/icons/watchList/add.png';
import styles from './styles';
import commonStyle from '../common/styles';
import SearchButton from '../common/HeaderSearchButton';
import ErrorMessage from '../common/ErrorMessage';
import { postWatchList, fetchWatchlistDetails } from '../redux/watchList/actionCreator';

const navigationOptions = {
  title: 'Watchlists',
  headerRight: () => <SearchButton />,
};

const WatchlistsScreen = () => {
  const [popupVisible, setModalVisible] = useState(false);
  const [watchListTitle, setWatchListTitle] = useState('');
  const dispatch = useDispatch();
  const {
    watchlists,
    loadingWatchlistDetailsError: error,
    loadingWatchlistDetails: loading,
  } = useSelector((state) => state.watchlists);
  const symbols = [...new Set(watchlists.map(({ stocks }) => stocks.map(({ ticker }) => ticker)))];
  const { padding } = commonStyle.container;

  useEffect(() => {
    dispatch(fetchWatchlistDetails(symbols));
  }, [symbols.length]);

  const onCloseAddModal = () => {
    setModalVisible(false);
    setWatchListTitle('');
  };

  const onConfirmAddModal = () => {
    if (watchListTitle) dispatch(postWatchList(watchListTitle));
    setModalVisible(false);
    setWatchListTitle('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (error ? (
          <View style={styles.listErrorContainer}>
            <ErrorMessage message={error.message} />
          </View>
        ) : null)}
        stickyHeaderIndices={[0]}
        contentContainerStyle={{ padding, paddingBottom: 60 }}
        data={watchlists}
        keyExtractor={(item) => JSON.stringify(item.id)}
        renderItem={({ item }) => (
          <WatchList item={item} />
        )}
        refreshing={loading}
        onRefresh={() => dispatch(fetchWatchlistDetails(symbols))}
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

WatchlistsScreen.navigationOptions = navigationOptions;

export default WatchlistsScreen;
