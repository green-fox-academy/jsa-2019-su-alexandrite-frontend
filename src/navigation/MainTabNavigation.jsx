import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Watchlists from '../Watchlists';
import Investments from '../Investments';
import Account from '../Account';
import Login from '../Account/Login';

import iconAccountActive from '../../assets/icons/bottom-tab/account-active.png';
import iconAccountInactive from '../../assets/icons/bottom-tab/account-inactive.png';
import iconWatchlistsActive from '../../assets/icons/bottom-tab/watchlists-active.png';
import iconWatchlistsInactive from '../../assets/icons/bottom-tab/watchlists-inactive.png';
import iconInvestmentsActive from '../../assets/icons/bottom-tab/investments-active.png';
import iconInvestmentsInactive from '../../assets/icons/bottom-tab/investments-inactive.png';
import StockDetails from '../StockDetails';
import Search from '../Search';
import NewsList from '../common/News/NewsList';
import NewsWebView from '../common/News/NewsWebView';
import Transactions from '../Transactions';

const InvestmentsStack = createStackNavigator({
  Investments: {
    screen: Investments,
    path: 'investments/',
  },
  Search,
  StockDetails,
  NewsList,
  NewsWebView,
});

const WatchlistsStack = createStackNavigator({
  Watchlists: {
    screen: Watchlists,
    path: 'watchlists/',
  },
  Search,
  StockDetails,
  NewsList,
  NewsWebView,
});

const AccountStack = createStackNavigator({
  Account: {
    screen: Account,
    path: 'account/',
  },
  Login,
  Transactions,
}, {
  title: 'ACCOUNT',
});

const renderIcon = (icon, tintColor) => (<Image source={icon} style={{ tintColor, height: 25, resizeMode: 'contain' }} />);

const tabs = {
  Investments: {
    screen: InvestmentsStack,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => renderIcon(
        focused ? iconInvestmentsActive : iconInvestmentsInactive,
        tintColor,
      ),
    },
  },
  Watchlists: {
    screen: WatchlistsStack,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => renderIcon(
        focused ? iconWatchlistsActive : iconWatchlistsInactive,
        tintColor,
      ),

    },
  },
  Account: {
    screen: AccountStack,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => renderIcon(
        focused ? iconAccountActive : iconAccountInactive,
        tintColor,
      ),
    },
  },
};

const BottomTabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: '#566ed3',
    inactiveTintColor: '#999999',
    showLabel: false,
  },
};

const TabNavigator = createBottomTabNavigator(tabs, BottomTabNavigatorConfig);
export default createAppContainer(TabNavigator);
