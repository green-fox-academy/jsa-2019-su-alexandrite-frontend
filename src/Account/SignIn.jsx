import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import styles from './styles';

const SignIn = () => {
  const { users } = useSelector((state) => state.users);
  const [name, setName] = useState('');
  const [passWord, setPassWord] = useState('');
  const { push } = useNavigation();

  const signIn = () => {
    if (name === '' || passWord === '') {
      Alert.alert('All fields are requied');
    }

    if (name === 'Aaron' && passWord === '123456') {
      push('Home');
    } else {
      Alert.alert('name or passWord is incorrect');
    }
    // for (let i = 0; i < users.length; i += 1) {
    //   if (name === users[i].userName && passWord === users[i].passWord) {
    //     Alert.alert();
    //   }
    // }
    // Alert.alert();
  };

  return (
    <KeyboardAvoidingView style={styles.loginBox} behavior="padding" enabled>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          label="Username"
          name="username"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.textInput}
          onChangeText={(text) => setName(text)}
          value={name}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry
          placeholder="Password"
          label="Password"
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.textInput}
          type="password"
          onChangeText={(text) => setPassWord(text)}
          value={passWord}
        />
      </View>
      <Button style={styles.button} title="Sign in!" onPress={signIn} />
    </KeyboardAvoidingView>
  );
};

export default SignIn;
