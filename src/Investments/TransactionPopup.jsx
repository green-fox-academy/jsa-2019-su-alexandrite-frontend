import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Popup from '../common/Popup';
import styles from './styles';
import TransactionSelector from './TransactionSelector';
import { purchaseStock } from '../redux/investment/actionCreator';

const TransactionPopup = () => {
  const [popupVisible, setModalVisible] = useState(false);
  const [shares, setShares] = useState(0);
  const [transactionBehavior, setTransactionBehavior] = useState('SELL');
  const stockName = 'Tesla';
  const dispatch = useDispatch();

  const onCloseAddModal = () => {
    setModalVisible(false);
    setShares('');
  };

  const onConfirmAddModal = () => {
    if (shares) dispatch(purchaseStock(stockName, shares, transactionBehavior));
    setModalVisible(false);
    setShares('');
  };

  return (
    <View>
      <Popup
        visible={popupVisible}
        onCancel={onCloseAddModal}
        onConfirm={onConfirmAddModal}
        title={`Purchase ${stockName}`}
        confirmButtonText="OK"
        confirmDisabled={!shares}
      >
        <TextInput style={styles.sharesField} placeholder="shares" onChangeText={() => setShares(Text)} />
        <TransactionSelector selected={transactionBehavior} onSelect={setTransactionBehavior} />
      </Popup>
      <TouchableHighlight
        onPress={() => setModalVisible(true)}
      >
        <Text>Trade</Text>
      </TouchableHighlight>
    </View>
  );
};

export default TransactionPopup;
