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

  const signOut = () => {
    dispatch(logOut());
  };

  return (
    <View style={styles.container}>
      {accessToken
        ? (
          <View>
            <Text>
              Welcome to our app
              {' '}
              {username}
            </Text>
            <Button title="SignOut" onPress={signOut} />
          </View>
        )
        : (
          <View>
            <Text>Please Login</Text>
            <Button title="SignIn" onPress={() => push('SignIn')} />
          </View>
        )}
    </View>
  );
};

export default Account;
