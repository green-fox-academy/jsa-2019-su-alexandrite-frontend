import React, { useState } from 'react';
import { View, Picker } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Popup from '../common/Popup';

const WatchlistPickerPopup = ({ visible, onClose, symbol }) => {
  const { watchlists } = useSelector((state) => state.watchlists);
  const [selectedWatchlist, setSelectedWatchlist] = useState();
  return (
    <Popup
      visible={visible}
      title={`Add ${symbol} to watchlist`}
      onCancel={onClose}
      confirmButtonText="OK"
      onConfirm={() => { }}
    >
      <View style={{ flex: 1, justifyContent: 'center', overflow: 'hidden' }}>
        <Picker
          selectedValue={selectedWatchlist}
          style={{ flex: 0.5, justifyContent: 'center' }}
          onValueChange={(val) => setSelectedWatchlist(val)}
        >
          {watchlists.map(({ name, id }) => (
            <Picker.Item key={id} label={name} value={id} />
          ))}
        </Picker>
      </View>
    </Popup>
  );
};

WatchlistPickerPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default WatchlistPickerPopup;
