import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import HeaderBar from './HeaderBar';
import { searchStockData } from '../redux/search/actionCreator';

jest.mock('react-redux');
jest.mock('../redux/search/actionCreator');
jest.mock('react-navigation-hooks');
jest.mock('./SearchBarInput', () => '<SearchBarInput />');
describe('<HeaderBar />', () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(() => { });
    useNavigation.mockReturnValue(() => ({
      pop: jest.fn(() => { }),
      push: jest.fn(() => { }),
    }));
    searchStockData.mockReturnValue('test_action');
  });

  afterAll(() => {
    jest.resetModules();
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const wrapper = shallow(<HeaderBar />);
    expect(wrapper).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const tree = renderer.create(
      <HeaderBar />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should call navigation.pop when cancel button is pressed', () => {
    const pop = jest.fn(() => { });
    const push = jest.fn(() => { });
    useNavigation.mockReturnValue({
      pop,
      push,
    });
    const wrapper = shallow(
      <HeaderBar />,
    );
    wrapper.find('TouchableHighlight')
      .first()
      .simulate('press');
    expect(useNavigation).toHaveBeenCalled();
    expect(pop).toHaveBeenCalled();
  });
});
