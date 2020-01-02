import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';

test('Card rednder properly', () => {
  const tree = renderer.create(
    <Card />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
