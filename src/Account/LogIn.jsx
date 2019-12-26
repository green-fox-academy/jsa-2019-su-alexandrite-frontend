import React, { useState, useEffect } from 'react';
import {
  TextInput,
  View,
  KeyboardAvoidingView,
  Alert,
  TouchableHighlight,
  Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import { FontAwesome5 } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import loginUser from '../redux/account/actionCreator';
import styles from './styles';
import Row from '../common/Row';
import Column from '../common/Column';

const SignInButton = ({ onPress }) => (
  <TouchableHighlight style={styles.button} onPress={onPress} underlayColor="#5d70ba" activeOpacity={0.5}>
    <Text style={styles.buttonText}><FontAwesome5 name="arrow-right" size={16} /></Text>
  </TouchableHighlight>
);

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { pop } = useNavigation();

  const { accessToken } = useSelector((state) => state.users);

  useEffect(() => {
    if (accessToken) pop();
  }, [accessToken]);

  const signIn = () => {
    if (username === '' || password === '') {
      return Alert.alert('All the input field are required');
    }
    return dispatch(loginUser(username, password));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.loginTitle}>Login</Text>
      </Row>
      <Row style={{ flex: 2 }}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Username"
            label="Username"
            name="username"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.textInput}
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <TextInput
            secureTextEntry
            placeholder="Password"
            label="Password"
            name="password"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.textInput}
            type="password"
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <Row style={{ flex: 0, justifyContent: 'center' }}>
            <Column style={{ flex: 0 }}>
              <SignInButton onPress={signIn} />
            </Column>
          </Row>
        </View>
      </Row>
    </KeyboardAvoidingView>
  );
};

SignInButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default SignIn;
