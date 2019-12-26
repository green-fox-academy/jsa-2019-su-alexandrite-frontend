import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Watchlists from '../Watchlists';
import Investments from '../Investments';
import Account from '../Account';
import Playground from '../Playground';
import LogIn from '../Account/LogIn';

import accountIcon from '../../assets/icons/bottom-tab/me.png';
import watchlistsIcon from '../../assets/icons/bottom-tab/watchlists.png';
import investmentsIconActive from '../../assets/icons/bottom-tab/investments-active.png';
import StockDetails from '../StockDetails';
import Search from '../Search';

const InvestmentsStack = createStackNavigator({
  Investments: {
    screen: Investments,
    path: 'investments/',
  },
  Search,
  StockDetails,
});

const WatchlistsStack = createStackNavigator({
  Watchlists: {
    screen: Watchlists,
    path: 'watchlists/',
  },
  Search,
  StockDetails,
});

const AccountStack = createStackNavigator({
  Account: {
    screen: Account,
    path: 'account/',
  },
  LogIn,
});

const PlaygroundStack = createStackNavigator({
  Playground,
  StockDetails,
  Search,
});

const renderIcon = (icon, tintColor) => (<Image source={icon} style={{ tintColor }} />);

const tabs = {
  ...(process.env.NODE_ENV === 'development' && { Playground: PlaygroundStack }),
  Investments: {
    screen: InvestmentsStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => renderIcon(investmentsIconActive, tintColor),
    },
  },
  Watchlists: {
    screen: WatchlistsStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => renderIcon(watchlistsIcon, tintColor),
    },
  },
  Me: {
    screen: AccountStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => renderIcon(accountIcon, tintColor),
    },
  },
};

const BottomTabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: '#566ed3',
    inactiveTintColor: '#999999',
  },
};

const TabNavigator = createBottomTabNavigator(tabs, BottomTabNavigatorConfig);
export default createAppContainer(TabNavigator);
