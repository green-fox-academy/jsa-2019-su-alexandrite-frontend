import React, { useState, useEffect } from 'react';
import {
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableHighlight,
  Text,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import { FontAwesome5 } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { loginUser } from '../redux/account/actionCreator';
import styles from './styles';
import Row from '../common/Row';
import Column from '../common/Column';

const LoginButton = ({ onPress, isLoading }) => (
  <TouchableHighlight style={styles.button} onPress={onPress} underlayColor="#5d70ba" activeOpacity={0.5}>
    {isLoading
      ? <ActivityIndicator size="large" color="white" />
      : (
        <Text style={styles.buttonText}>
          <FontAwesome5 name="arrow-right" size={16} />
        </Text>
      )}
  </TouchableHighlight>
);

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { pop } = useNavigation();

  const { accessToken, error, isLoggingIn } = useSelector((state) => state.user);

  useEffect(() => {
    if (accessToken) pop();
  }, [accessToken]);

  const login = () => {
    dispatch(loginUser(username, password));
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
          {error
            ? (
              <View style={styles.errorMessageContainer}>
                <Text style={styles.errorMessage}>
                  {error.message}
                </Text>
              </View>
            )
            : null}
          <Row style={{ flex: 0, justifyContent: 'center' }}>
            <Column style={{ flex: 0 }}>
              <LoginButton onPress={login} isLoading={isLoggingIn} />
            </Column>
          </Row>
        </View>
      </Row>
    </KeyboardAvoidingView>
  );
};

LoginButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Login;
