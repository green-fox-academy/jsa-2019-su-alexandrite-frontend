import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import {
  Text,
  View,
  Modal,
  Button,
  TextInput,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import { postWatchList } from '../redux/watchList/actionCreator';
import styles from './styles';

export default function Popup({ visible, toggle }) {
  const [watchListTitle, setWatchListTitle] = useState('');
  const dispatch = useDispatch();

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      presentationStyle="overFullScreen"
      onRequestClose={() => {
        toggle(false);
      }}
    >
      <SafeAreaView style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Create a watchlist</Text>
            <TouchableHighlight style={styles.modalCloseButtonWrapper} underlayColor="rgba(0,0,0,0.1)" onPress={() => toggle(false)}>
              <Ionicons name="md-close" size={13} color="white" />
            </TouchableHighlight>
          </View>
          <View style={styles.modalBody}>
            <TextInput style={styles.modalTextField} placeholder="Watchlist Name" onChangeText={(text) => setWatchListTitle(text)} />
            <View style={styles.modalButtonGroup}>
              <Button
                style={styles.modalButton}
                title="Cancel"
                onPress={() => {
                  toggle(false);
                }}
              />
              <Button
                title="Add"
                style={styles.modalButton}
                disabled={watchListTitle === ''}
                onPress={() => {
                  toggle(!visible);
                  // setWatchListItem('');
                  if (watchListTitle === '') {
                    toggle(true);
                  } else {
                    dispatch(postWatchList(watchListTitle));
                  }
                }}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}
Popup.propTypes = {
  visible: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
