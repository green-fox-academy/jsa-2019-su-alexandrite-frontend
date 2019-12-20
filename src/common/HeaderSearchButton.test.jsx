import React from 'react';
import renderer from 'react-test-renderer';

import SearchButton from './HeaderSearchButton';

test('renders correctly', () => {
  const tree = renderer.create(<SearchButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
