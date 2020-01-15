import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesome5 } from '@expo/vector-icons';
import Watchlists from '../Watchlists';
import Investments from '../Investments';
import Account from '../Account';
import Login from '../Account/Login';

import StockDetails from '../StockDetails';
import Search from '../Search';
import NewsList from '../common/News/NewsList';
import NewsScreen from '../News';
import NewsWebView from '../common/News/NewsWebView';
import Transactions from '../Transactions';

const NewsStack = createStackNavigator({
  NewsScreen,
  NewsWebView,
});

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

const renderIcon = (name, color, solid = false) => (
  <FontAwesome5 name={name} solid={solid} color={color} size={20} />
);

const tabs = {
  News: {
    screen: NewsStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => renderIcon('newspaper', tintColor),
    },
  },
  Investments: {
    screen: InvestmentsStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => renderIcon('chart-line', tintColor),
    },
  },
  Watchlists: {
    screen: WatchlistsStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => renderIcon('heart', tintColor, true),
    },
  },
  Account: {
    screen: AccountStack,
    navigationOptions: {
      title: 'ACCOUNT',
      tabBarIcon: ({ tintColor }) => renderIcon('wallet', tintColor),
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
