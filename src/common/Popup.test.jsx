import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import Popup from './Popup';

describe('<Popup />', () => {
  it('should render properly and match the snapshot', () => {
    const tree = renderer.create(
      <Popup
        visible={false}
        onCancel={jest.fn()}
        onConfirm={jest.fn()}
        confirmButtonText="OK"
        confirmDisabled={false}
        title="Title"
      >
        <Text>Test</Text>
      </Popup>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render properly and match the snapshot when confirm enabled', () => {
    const tree = renderer.create(
      <Popup
        visible={false}
        onCancel={jest.fn()}
        onConfirm={jest.fn()}
        confirmButtonText="OK"
        confirmDisabled
        title="Title"
      >
        <Text>Test</Text>
      </Popup>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
