import React, { useState, useEffect } from 'react';
import {
  TextInput, Text, ActivityIndicator, View,
} from 'react-native';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';
import Popup from '../common/Popup';
import styles from './styles';
import { addToBalance, initializeTopUp } from '../redux/account/actionCreator';
import ErrorMessage from '../common/ErrorMessage';
import Column from '../common/Column';

const WatchlistPickerPopup = ({ visible, onClose }) => {
  const {
    topUpIsLoading,
    topUpError: error,
    isSettled,
  } = useSelector((state) => state.user);
  const [topUpInput, setTopUpInput] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSettled) {
      setTimeout(() => {
        onClose(false);
        setTopUpInput();
        dispatch(initializeTopUp());
      }, 1000);
    }
  }, [isSettled]);

  return (
    <Popup
      visible={visible}
      title="Top-up"
      onCancel={onClose}
      confirmButtonText="OK"
      onConfirm={() => {
        dispatch(addToBalance(parseInt(topUpInput, 10)));
      }}
      confirmDisabled={isSettled}
    >
      {isSettled
        ? (
          <Column style={{ justifyContent: 'center', alignItems: 'center' }} flex={1}>
            <FontAwesome5 name="check-circle" solid color="green" size={64} />
            <Text style={{ padding: 8, fontWeight: 'bold' }}>Success!</Text>
          </Column>
        ) : (
          <View style={{
            borderBottomColor: '#333',
            borderBottomWidth: 2,
            padding: 8,
            flexDirection: 'row',
          }}
          >
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>$</Text>
            <TextInput
              style={styles.topUpInput}
              clearButtonMode="while-editing"
              onChangeText={setTopUpInput}
              keyboardType="decimal-pad"
              value={topUpInput}
              editable={!isSettled}
              placeholder="Amount"
            />
          </View>
        )}
      {error && <ErrorMessage message={error.message} />}
      {topUpIsLoading && <ActivityIndicator size="large" style={styles.loading} />}
    </Popup>
  );
};

WatchlistPickerPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default WatchlistPickerPopup;
