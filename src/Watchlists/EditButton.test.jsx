import React from 'react';
import renderer from 'react-test-renderer';

import EditButton from './EditButton';

it('renders correctly', () => {
  const tree = renderer.create(<EditButton isInEditMode toggleEditMode={() => null} />).toJSON();
  expect(tree).toMatchSnapshot();
});
