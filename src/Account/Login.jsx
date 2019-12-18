import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';

const Login = () => {
  const { users } = useSelector((state) => state.users);
  const [name, setName] = useState('');
  const [passWord, setPassWord] = useState('');

  const login = () => {
    for (let i = 0; i < users.length; i += 1) {
      if (name === users[i].userName && passWord === users[i].passWord) {
        alert('success');
      }
    }
    alert('failure');
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
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
        <Button title="Sign in!" onPress={login} />
      </View>
    </View>
  );
};

export default Login;
