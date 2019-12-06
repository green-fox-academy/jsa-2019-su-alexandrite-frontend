import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  Text,
  TouchableHighlight,
} from 'react-native';
import { StackActions } from 'react-navigation';
import { useDispatch } from 'react-redux';
import { searchData } from '../redux/search/actionCreater';

export default function SearchBar() {
  const [value, onChangeText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    let timer;
    if (value.length >= 2) {
      timer = setTimeout(() => {
        dispatch(searchData(value));
      }, 3000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [value]);

  return (
    <SafeAreaView style={{
      backgroundColor: '#566ed3',
    }}
    >
      <View style={{
        padding: 15,
        flexDirection: 'row',
      }}
      >
        <TextInput
          style={{
            flex: 1,
            backgroundColor: 'white',
            paddingHorizontal: 11,
            paddingVertical: 8,
            fontSize: 12,
            borderRadius: 50,
          }}
          clearButtonMode="while-editing"
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
        <TouchableHighlight
          style={{
            marginLeft: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={StackActions.pop({ n: 1 })}
        >
          <Text style={{ color: '#fff', fontSize: 14, fontWeight: '500' }}>Cancel</Text>
        </TouchableHighlight>
      </View>

    </SafeAreaView>
  );
}
