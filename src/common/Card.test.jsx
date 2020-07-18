import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';
import Card from './Card';

test('Card render properly', () => {
  const tree = renderer.create(
    <Card />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Card render properly with title', () => {
  const tree = renderer.create(
    <Card title="test title" />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Card render properly with children', () => {
  const tree = renderer.create(
    <Card><Text>test children</Text></Card>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
