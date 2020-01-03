import React from 'react';
import renderer from 'react-test-renderer';

import EditFooter from './EditFooter';

describe('<EditFooter />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const wrapper = renderer.create(
      <EditFooter
        checkedItems={[]}
        isInEditMode={false}
        toggleEditMode={jest.fn()}
        onDeleteWatchlist={jest.fn()}
        onDeleteStocks={jest.fn()}
      />,
    );
    expect(wrapper).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot when not in edit mode', () => {
    const tree = renderer.create(
      <EditFooter
        checkedItems={[]}
        isInEditMode={false}
        toggleEditMode={jest.fn()}
        onDeleteWatchlist={jest.fn()}
        onDeleteStocks={jest.fn()}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render and match the snapshot when in edit mode', () => {
    const tree = renderer.create(
      <EditFooter
        checkedItems={[]}
        isInEditMode
        toggleEditMode={jest.fn()}
        onDeleteWatchlist={jest.fn()}
        onDeleteStocks={jest.fn()}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
