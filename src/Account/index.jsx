import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import { logOut } from '../redux/account/actionCreator';
import styles from './styles';

const Account = () => {
  const { accessToken } = useSelector((state) => state.users);
  const { username } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { push } = useNavigation();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <View style={styles.container}>
      {accessToken
        ? (
          <View>
            <Text style={{ fontSize: 20 }}>
              Welcome to our app
              {' '}
              {username}
            </Text>
            <Button style={styles.signOutButton} title="LogOut" onPress={handleLogOut} />
          </View>
        )
        : (
          <View>
            <Text>Please Login</Text>
            <Button title="Login" onPress={() => push('LogIn')} />
          </View>
        )}
    </View>
  );
};

export default Account;
