import React, { useState } from 'react';
import {
  Text,
  TouchableHighlight,
} from 'react-native';
import { useSelector } from 'react-redux';
import Row from '../common/Row';
import Card from '../common/Card';
import Column from '../common/Column';
import { moneyAmount2String } from '../common/numbers';
import Popup from '../common/Popup';
import { TextInput } from 'react-native-gesture-handler';

const Balance = () => {
  const {
    balance,
  } = useSelector((state) => state.user);

  const [topUpVisible, setTopUpVisible] = useState(false);

  return (
    <Card style={{ flexDirection: 'row' }}>
      <Column>
        <Row style={{ justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16, opacity: 0.5 }}>Trading Account Balance</Text>
        </Row>
        <Row style={{ justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 36, lineHeight: 60 }}>{moneyAmount2String(balance)}</Text>
        </Row>
        <Row style={{ justifyContent: 'center' }}>
          <TouchableHighlight
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: '#ccc',
            }}
            underlayColor="#eee"
            onPress={() => setTopUpVisible(true)}
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
          <Popup
            visible={topUpVisible}
            onCancel={() => setTopUpVisible(false)}
          >
            <TextInput />
          </Popup>
        </Row>
      </Column>
    </Card>
  );
};

export default Balance;
