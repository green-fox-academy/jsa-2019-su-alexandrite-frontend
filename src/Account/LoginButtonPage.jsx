import React from 'react';
import {
  Text, ImageBackground, TouchableHighlight,
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import bg from '../../assets/img/background/login.png';
import Row from '../common/Row';

const LoginButtonPage = () => {
  const { push } = useNavigation();
  return (
    <ImageBackground source={bg} style={{ flex: 1, justifyContent: 'center' }}>
      <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#999',
        }}
        >
          You haven’t logged in
        </Text>
      </Row>
      <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{
          fontSize: 36,
          fontWeight: 'bold',
          color: '#333',
          textAlign: 'center',
          paddingHorizontal: 60,
        }}
        >
          Login to unlock more features
        </Text>
      </Row>
      <Row flex={0.3} style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableHighlight
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 20,
            borderWidth: 2,
            borderColor: '#ccc',
          }}
          underlayColor="#eee"
          onPress={() => push('Login')}
        >
          <Text
            style={{
              color: '#999',
              fontWeight: 'bold',
            }}
          >
            TOP-UP
          </Text>
        </TouchableHighlight>
      </Row>
    </ImageBackground>
  );
};

export default LoginButtonPage;
