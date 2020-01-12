import React, { useEffect } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import { logOut, fetchUserProfile } from '../redux/account/actionCreator';
import styles from './styles';
import commonStyles from '../common/styles';
import Profile from './Profile';
import Balance from './Balance';
import Transactions from '../Transactions';
import MenuItem from './MenuItem';

const Account = () => {
  const { accessToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { push } = useNavigation();

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [accessToken]);

  const handleLogOut = () => {
    dispatch(logOut());
  };
  const { alignItems, ...SVStyles } = commonStyles.container;
  const navigator = useNavigation();
  return (
    <ScrollView style={SVStyles} contentContainerStyle={{ alignItems }}>
      {accessToken
        ? (
          <>
            <Profile />
            <Balance />
            {/* <Transactions /> */}
            <MenuItem name="Transactions" onPress={() => navigator.push('Transactions')} />
            <MenuItem name="Logout" color="red" onPress={handleLogOut} />
          </>
        ) : (
          <View>
            <Text>Please Login</Text>
            <Button title="login" onPress={() => push('Login')} />
          </View>
        )}
    </ScrollView>
  );
};

export default Account;
