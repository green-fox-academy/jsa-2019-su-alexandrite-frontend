import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesome5 } from '@expo/vector-icons';
import Popup from '../common/Popup';
import styles from './styles';
import TransactionSelector from './TransactionSelector';
import purchaseStock, { purchaseStockReset } from '../redux/order/actionCreator';
import FAB from '../common/FAB';
import ErrorMessage from '../common/ErrorMessage';
import Column from '../common/Column';

const TransactionPopup = ({ symbol }) => {
  const [popupVisible, setModalVisible] = useState(false);
  const [shares, setShares] = useState(0);
  const [transactionBehavior, setTransactionBehavior] = useState('sell');
  const { accessToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const {
    isLoading,
    error,
    isSettled,
  } = useSelector((state) => state.orders);

  useEffect(() => {
    if (isSettled) {
      setTimeout(() => {
        setModalVisible(false);
        setShares();
        dispatch(purchaseStockReset());
      }, 1000);
    }
  }, [isSettled]);

  const onCloseAddModal = () => {
    setModalVisible(false);
    setShares();
  };

  const onConfirmAddModal = () => {
    const share = parseInt(shares, 10);
    if (shares) {
      dispatch(purchaseStock(symbol, share, transactionBehavior, accessToken));
      // setModalVisible(false);
      // setShares('');
    }
  };

  return (
    <View>
      <Popup
        visible={popupVisible}
        onCancel={onCloseAddModal}
        onConfirm={onConfirmAddModal}
        title={`Purchase ${symbol}`}
        confirmButtonText="OK"
        confirmDisabled={!shares || isSettled}
      >
        {isSettled
          ? (
            <Column style={{ justifyContent: 'center', alignItems: 'center' }} flex={1}>
              <FontAwesome5 name="check-circle" solid color="green" size={64} />
              <Text style={{ padding: 8, fontWeight: 'bold' }}>Success!</Text>
            </Column>
          ) : (
            <>
              <View style={{
                borderBottomColor: '#333',
                borderBottomWidth: 2,
                padding: 8,
                flexDirection: 'row',
              }}
              >
                <TextInput style={styles.sharesField} placeholder="shares" onChangeText={(text) => setShares(text)} />
                {isLoading && <ActivityIndicator style={styles.loading} />}
              </View>
              <TransactionSelector
                selected={transactionBehavior}
                onSelect={setTransactionBehavior}
              />
              {error && <ErrorMessage message={error.message} />}
            </>
          )}

      </Popup>
      <FAB
        onPress={() => setModalVisible(true)}
        iconName="exchange-alt"
      />
    </View>
  );
};

TransactionPopup.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default TransactionPopup;
