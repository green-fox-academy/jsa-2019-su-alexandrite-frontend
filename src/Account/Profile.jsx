import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { useSelector } from 'react-redux';
import Row from '../common/Row';
import Card from '../common/Card';

const Profile = () => {
  const {
    username,
  } = useSelector((state) => state.user);

  return (
    <Card style={{ flexDirection: 'row' }}>
      <Row style={{ justifyContent: 'center', marginBottom: 15 }}>
        <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: '#ccc' }} />
      </Row>
      <Row style={{ justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{username}</Text>
      </Row>
    </Card>
  );
};

export default Profile;
