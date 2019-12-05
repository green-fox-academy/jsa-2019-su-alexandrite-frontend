import React, { useState, useEffect } from 'react';
import { SafeAreaView, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchData } from '../redux/search/actionCreater';

export default function SearchBar() {
  const [value, onChangeText] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    let timer;
    if (value.length >= 2) {
      timer = setTimeout(() => {
        dispatch(fetchData(value));
        alert('times up');
      }, 3000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [value]);

  function handleChange(text) {
    onChangeText(text);
    // clearTimeout(timer);
    // if (value.length >= 2) {
    //   timer = setTimeout(() => {
    //     dispatch(fetchData(value));
    //     alert('times up');
    //   }, 2000);
    // }
  }

  return (
    <SafeAreaView>
      <TextInput
        style={{ height: 40, backgroundColor: '#566ed3' }}
        onChangeText={(text) => handleChange(text)}
        value={value}
      />
    </SafeAreaView>
  );
}
