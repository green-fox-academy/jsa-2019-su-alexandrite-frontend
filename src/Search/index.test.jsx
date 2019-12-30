import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../store';

import Search from './index';

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Search />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
