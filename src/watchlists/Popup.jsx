import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  View,
  Text,
  Modal,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import { postWatchList } from '../redux/watchList/actionCreator';
import styles from '../common/styles';

export default function Popup({ visible, toggle }) {
  const [watchListTitle, setWatchListTitle] = useState('');
  const dispatch = useDispatch();

  return (
    <Modal
      style={styles.watchListInput}
      animationType="slide"
      transparent={false}
      visible={visible}
      presentationStyle="pagesheet"
      onRequestClose={() => {
        toggle(false);
      }}
    >
      <View style={{ marginTop: 22 }}>
        <View>
          <TextInput onChangeText={(text) => setWatchListTitle(text)} />
          <TouchableHighlight
            onPress={() => {
              toggle(!visible);
              // setWatchListItem('');
              if (watchListTitle === '') {
                alert('Please Enter WatchList');
                toggle(true);
              } else {
                dispatch(postWatchList(watchListTitle));
              }
            }}
          >
            <Text>Add</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
}
Popup.propTypes = {
  visible: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
