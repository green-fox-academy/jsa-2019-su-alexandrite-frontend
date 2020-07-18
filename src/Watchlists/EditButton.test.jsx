import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import EditButton from './EditButton';

describe('<EditButton />', () => {
  it('renders correctly when user watchlist is in edit mode', () => {
    const tree = renderer.create(
      <EditButton
        isInEditMode
        toggleEditMode={jest.fn()}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when user watchlist is not in edit mode', () => {
    const tree = renderer.create(
      <EditButton
        isInEditMode={false}
        toggleEditMode={jest.fn()}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should toggle edit mode when tapping on editorButton', () => {
    const setIsInEditMode = jest.fn();
    const toggleEditMode = jest.fn(() => setIsInEditMode);
    const wrapper = shallow(
      <EditButton
        isInEditMode={false}
        toggleEditMode={toggleEditMode}
      />,
    );
    wrapper.find('TouchableHighlight')
      .first()
      .simulate('press');
    expect(toggleEditMode).toHaveBeenCalledWith(true);
  });
});
