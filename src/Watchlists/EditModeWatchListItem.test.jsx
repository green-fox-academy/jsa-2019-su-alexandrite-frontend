import React from 'react';
import renderer from 'react-test-renderer';

import EditModeWatchListItem from './EditModeWatchListItem';

describe('<EditModeWatchListItem />', () => {
  it('Should render properly when checkbox is not checked', () => {
    const tree = renderer.create(
      <EditModeWatchListItem
        isChecked={false}
        onSelect={jest.fn()}
        ticker="APPL"
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render properly when checkbox is checked', () => {
    const tree = renderer.create(
      <EditModeWatchListItem
        isChecked
        onSelect={jest.fn()}
        ticker="APPL"
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
