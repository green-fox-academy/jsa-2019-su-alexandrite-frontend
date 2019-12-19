import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import Login from './Login';
import styles from './styles';

const navigationOptions = {
  title: 'Account',
};

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="blue"
        barStyle="light-content"
      />
      <Text style={styles.title}>Welcome to login page</Text>
      <Login />
    </View>
  );
};

AccountScreen.navigationOptions = navigationOptions;

export default AccountScreen;
