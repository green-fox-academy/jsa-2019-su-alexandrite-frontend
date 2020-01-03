import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';
import Column from './Column';

test('Column render properly', () => {
  const tree = renderer.create(
    <Column />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Column render properly with children', () => {
  const tree = renderer.create(
    <Column><Text>test children</Text></Column>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
