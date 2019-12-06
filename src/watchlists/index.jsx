import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import WatchList from './WatchList';
import Popup from './Popup';

const navigationOptions = {
  title: 'WATCHLISTS',
};

const watchlistsScreen = () => {
  const watchLists = useSelector((state) => state.watchlists.watchlists);
  return (
    <View>
      {watchLists.map((item) => (
        <WatchList key={item.id} name={item.name} />
      ))}
      <Popup />
    </View>
  );
};

watchlistsScreen.navigationOptions = navigationOptions;

export default watchlistsScreen;
