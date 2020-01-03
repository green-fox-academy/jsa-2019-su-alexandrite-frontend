import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import EditControls from './EditControls';

jest.useFakeTimers();

describe('<EditControls />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const wrapper = renderer.create(
      <EditControls
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

  it('Should render and match the snapshot', () => {
    const tree = renderer.create(
      <EditControls
        checkedItems={[]}
        isInEditMode={false}
        toggleEditMode={jest.fn()}
        onDeleteWatchlist={jest.fn()}
        onDeleteStocks={jest.fn()}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should toggle edit mode when tapping on editorButton', () => {
    const toggleEditMode = jest.fn();
    const toggle = jest.fn(() => toggleEditMode);
    const wrapper = shallow(
      <EditControls
        checkedItems={[]}
        isInEditMode={false}
        toggleEditMode={toggle}
        onDeleteWatchlist={() => { }}
        onDeleteStocks={() => { }}
      />,
    );
    wrapper
      .find({ testID: 'editor-button' })
      .first()
      .simulate('press');
    expect(toggle).toHaveBeenCalledWith(true);
  });
});
