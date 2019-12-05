import React, { useState } from 'react';
import { SafeAreaView, TextInput } from 'react-native';

export default function SearchBar() {
  const [value, onChangeText] = useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={{ height: 40, backgroundColor: '#566ed3' }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
    </SafeAreaView>
  );
}
