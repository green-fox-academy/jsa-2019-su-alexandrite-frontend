import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

export default function SearchButton() {
  const { push } = useNavigation();
  return (
    <Button
      onPress={() => push('Search')}
      title="Search"
      color="red"
    />
  );
}
