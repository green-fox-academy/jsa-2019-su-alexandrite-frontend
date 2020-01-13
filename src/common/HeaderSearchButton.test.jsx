import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { useNavigation } from 'react-navigation-hooks';

import SearchButton from './HeaderSearchButton';

jest.mock('react-navigation-hooks');

describe('<SearchButton />', () => {
  it('should call navigation.push when detail button is pressed', () => {
    const push = jest.fn(() => { });
    useNavigation.mockReturnValue({ push });
    const wrapper = shallow(
      <SearchButton />,
    );
    wrapper.find('TouchableHighlight')
      .first()
      .simulate('press');
    expect(useNavigation).toHaveBeenCalled();
    expect(push).toHaveBeenCalled();
  });

  it('should render properly', () => {
    const tree = renderer.create(
      <SearchButton />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
