import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Popup from '../common/Popup';
import styles from '../Investments/styles';
import TransactionSelector from './TransactionSelector';
import { purchaseStock } from '../redux/stock/actionCreator';

const TransactionPopup = () => {
  const [popupVisible, setModalVisible] = useState(false);
  const [shares, setShares] = useState('');
  const [transactionBehavior, setTransactionBehavior] = useState('sell');
  const { accessToken } = useSelector((state) => state.user);
  const stockName = 'MSFT';
  const dispatch = useDispatch();

  const onCloseAddModal = () => {
    setModalVisible(false);
    setShares('');
  };

  const onConfirmAddModal = () => {
    const share = parseInt(shares, 10);
    if (shares) dispatch(purchaseStock(stockName, share, transactionBehavior, accessToken));
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
        <TextInput style={styles.sharesField} placeholder="shares" onChangeText={(text) => setShares(text)} />
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
