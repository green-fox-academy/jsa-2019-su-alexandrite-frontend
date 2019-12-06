import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  View,
  Text,
  Modal,
  TouchableHighlight,
  Alert,
  Image,
  TextInput,
} from 'react-native';
import add from '../../assets/icons/watchList/add.png';

export default function Pupup() {
  const watchLists = useSelector((state) => state.watchlists.watchlists);
  const [modalVisible, setModalVisible] = useState(false);
  const [watchListItem, setWatchListItem] = useState('');

  return (
    <View style={{ marginTop: 100 }}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        presentationStyle="pagesheet"
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View style={{ marginTop: 22 }}>
          <View>
            <TextInput onChangeText={(text) => setWatchListItem(text)} />
            <TouchableHighlight
              onPress={() => {
                setModalVisible(!modalVisible);
                watchLists.push({ name: watchListItem });
                setWatchListItem('');
              }}
            >
              <Text>Add</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Image source={add} />
      </TouchableHighlight>
    </View>
  );
}
