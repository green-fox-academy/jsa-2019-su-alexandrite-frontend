import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';
import CardFooter from './CardFooter';

test('CardFooter render properly', () => {
  const tree = renderer.create(
    <CardFooter />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('CardFooter render properly with children', () => {
  const tree = renderer.create(
    <CardFooter><Text>test children</Text></CardFooter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
