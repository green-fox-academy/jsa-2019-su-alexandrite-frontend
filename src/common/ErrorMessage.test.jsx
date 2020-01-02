import React from 'react';
import renderer from 'react-test-renderer';
import ErrorMessage from './ErrorMessage';

test('Card rednder properly', () => {
  const tree = renderer.create(
    <ErrorMessage message="Error Message" />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});