import React, { useState } from 'react';
import { Text, TextInput, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Popup from '../common/Popup';
import styles from './styles';
import { addToBalance } from '../redux/account/actionCreator';

const WatchlistPickerPopup = ({ visible, onClose }) => {
  const {
    isLoading,
    error,
  } = useSelector((state) => state.account);
  const [topUpInput, setTopUpInput] = useState('');
  const dispatch = useDispatch();

  return (
    <Popup
      visible={visible}
      title="Top-up"
      onCancel={onClose}
      confirmButtonText="OK"
      onConfirm={() => {
        dispatch(addToBalance(topUpInput));
        if (error) {
          return <Text>{error}</Text>;
        }
        return onClose();
      }}
    >
      <TextInput
        style={styles.topUpInput}
        clearButtonMode="while-editing"
        onChangeText={(input) => setTopUpInput(input)}
        value={topUpInput}
      />
      {isLoading && <ActivityIndicator size="large" style={styles.loading} color="#fff" />}
    </Popup>
  );
};

WatchlistPickerPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default WatchlistPickerPopup;
