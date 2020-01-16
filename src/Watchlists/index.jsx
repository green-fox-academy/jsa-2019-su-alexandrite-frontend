import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  TextInput,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import WatchList from './WatchList';
import Popup from '../common/Popup';
import styles from './styles';
import commonStyle from '../common/styles';
import SearchButton from '../common/HeaderSearchButton';
import ErrorMessage from '../common/ErrorMessage';
import Card from '../common/Card';
import { postWatchList, fetchWatchlistDetails } from '../redux/watchList/actionCreator';
import FAB from '../common/FAB';

const EMPTY_LIST_MESSAGE = 'You don\'t have any watchlists right now.\nStart by adding one! ;)';

const navigationOptions = {
  title: 'WATCHLISTS',
  headerRight: () => <SearchButton />,
};

const WatchlistsScreen = () => {
  const [popupVisible, setModalVisible] = useState(false);
  const [watchListTitle, setWatchListTitle] = useState('');
  const dispatch = useDispatch();
  const {
    watchlists,
    watchlistDetailsError: error,
    isLoadingWatchlistDetails: isLoading,
  } = useSelector((state) => state.watchlists);
  const { padding } = commonStyle.container;

  const loadDetails = () => {
    if (watchlists && watchlists.length) {
      dispatch(fetchWatchlistDetails());
    }
  };

  useEffect(() => {
    loadDetails();
  }, []);

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
        refreshing={isLoading !== undefined ? isLoading : false}
        onRefresh={loadDetails}
        ListEmptyComponent={<Card><ErrorMessage message={EMPTY_LIST_MESSAGE} /></Card>}
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
      <FAB
        iconName="plus"
        onPress={() => {
          setModalVisible(true);
        }}
      />
    </View>
  );
};

WatchlistsScreen.navigationOptions = navigationOptions;

export default WatchlistsScreen;
