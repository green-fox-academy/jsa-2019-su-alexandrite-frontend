import React, { useState } from 'react';
import { View, Picker, Text } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Popup from '../common/Popup';
import { addStockToWatchlist } from '../redux/watchList/actionCreator';

const WatchlistPickerPopup = ({ visible, onClose, symbol }) => {
  const { watchlists } = useSelector((state) => state.watchlists);
  const dispatch = useDispatch();
  const filteredWL = watchlists
    .filter((wl) => !wl.stocks.find((stock) => stock.ticker === symbol));
  const [selectedWatchlist, setSelectedWatchlist] = useState(
    filteredWL.length
      ? filteredWL[0].id
      : undefined,
  );

  return (
    <Popup
      visible={visible}
      title={`Add ${symbol} to watchlist`}
      onCancel={onClose}
      confirmButtonText="OK"
      onConfirm={() => {
        if (selectedWatchlist) dispatch(addStockToWatchlist(selectedWatchlist, symbol));
        onClose();
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center', overflow: 'hidden' }}>
        {filteredWL.length
          ? (
            <Picker
              selectedValue={selectedWatchlist}
              style={{ flex: 0.5, justifyContent: 'center' }}
              onValueChange={(val) => setSelectedWatchlist(val)}
            >
              {
                filteredWL.map(({ name, id }) => (
                  <Picker.Item key={id} label={name} value={id} />
                ))
              }
            </Picker>
          ) : <Text style={{ textAlign: 'center' }}>You have this stock in all of your watchlists</Text>}
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
