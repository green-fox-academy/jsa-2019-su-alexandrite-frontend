import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';
import Row from './Row';

test('Row render properly', () => {
  const tree = renderer.create(
    <Row />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Row render properly with children', () => {
  const tree = renderer.create(
    <Row><Text>test children</Text></Row>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
