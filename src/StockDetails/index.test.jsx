import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import StockDetails from '.';

jest.mock('react-redux');
jest.mock('react-navigation-hooks');
jest.mock('./Performance', () => '<Performance />');
jest.mock('./Stats', () => '<Stats />');
jest.mock('./WatchlistPickerPopup', () => '<WatchlistPickerPopup />');

describe('<StockDetails />', () => {
  beforeEach(() => {
    useDispatch.mockReturnValueOnce(() => { });
    useNavigation.mockReturnValue({
      push: jest.fn(),
      setParams: jest.fn(),
    });
  });

  afterAll(() => {
    jest.resetModules();
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const wrapper = shallow(<StockDetails />);
    expect(wrapper).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const tree = renderer.create(
      <StockDetails />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should pass show modal function on load', () => {
    const mockSetParams = jest.fn();
    useNavigation.mockReturnValueOnce({
      setParams: mockSetParams,
    });
    const tree = renderer.create(
      <StockDetails />,
    );
    tree.update(<StockDetails />);
    expect(mockSetParams).toHaveBeenCalled();
  });

  // it('Should pass close function to modal', () => {
  //   const mockSetState = jest.fn();
  //   const spy = jest.spyOn(React, 'useState');
  //   // jest.mock('react', () => ({
  //   //   ...React,
  //   //   useState: jest.fn().mockReturnValue([false, mockSetState]),
  //   // }));
  //   // React.mockReturnValueOnce({

  //   // });
  //   const wrapper = shallow(
  //     <StockDetails />,
  //   );
  //   expect(spy).toHaveBeenCalled();
  //   wrapper.find('WatchlistPickerPopup').props().onClose();
  //   expect(mockSetState).toHaveBeenCalledWith(false);
  it('Should pass close function to modal', () => {
    const mockClose = jest.fn();
    const mockGetParams = jest.fn().mockReturnValue(mockClose);
    useNavigation.mockReturnValueOnce({
      getParam: mockGetParams,
    });
    const headerRightButton = StockDetails
      .navigationOptions({ navigation: useNavigation() })
      .headerRight();
    headerRightButton.props.onPress();
    expect(mockClose).toHaveBeenCalled();
  });
});
