import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { useNavigation } from 'react-navigation-hooks';
import WatchListItem from './WatchListItem';

jest.mock('react-navigation-hooks');

describe('<WatchListItem />', () => {
  it('should call navigation.push when detail button is pressed', () => {
    const push = jest.fn(() => { });
    useNavigation.mockReturnValue({ push });
    const wrapper = shallow(
      <WatchListItem
        ticker="APPL"
        currPrice={0}
        dailyChange={0.5}
        volume=""
      />,
    );
    wrapper.find('TouchableHighlight')
      .first()
      .simulate('press');
    expect(useNavigation).toHaveBeenCalled();
    expect(push).toHaveBeenCalled();
  });

  it('should render properly when dailyChange is above 0', () => {
    const tree = renderer.create(
      <WatchListItem
        ticker="APPL"
        currPrice={0}
        dailyChange={0.5}
        volume=""
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render properly when dailyChange is below 0', () => {
    const tree = renderer.create(
      <WatchListItem
        ticker="APPL"
        currPrice={0}
        dailyChange={-0.5}
        volume=""
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
