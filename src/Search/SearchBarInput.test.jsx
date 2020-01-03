import React from 'react';
import { useDispatch } from 'react-redux';
import { shallow } from 'enzyme';
import renderer, { act } from 'react-test-renderer';
import { searchStockData } from '../redux/search/actionCreator';
import SearchBarInput from './SearchBarInput';

jest.mock('react-redux');
jest.mock('../redux/search/actionCreator');

describe('<SearchBarInput />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const wrapper = shallow(<SearchBarInput text="" setText={jest.fn()} />);
    expect(wrapper).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const tree = renderer.create(
      <SearchBarInput text="" setText={jest.fn()} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should not trigger search if query length is le 3', () => {
    jest.useFakeTimers();
    const mockDispatch = jest.fn(() => { });
    useDispatch.mockReturnValue(mockDispatch);
    searchStockData.mockReturnValueOnce('test_action');
    const wrapper = renderer.create(
      <SearchBarInput text="" setText={jest.fn()} />,
    );
    act(() => {
      wrapper.update(<SearchBarInput text="1" setText={jest.fn()} />);
    });
    expect(setTimeout).not.toHaveBeenCalled();
    renderer.act(() => {
      jest.advanceTimersByTime(300);
    });
    expect(mockDispatch).not.toHaveBeenCalled();
    expect(searchStockData).not.toHaveBeenCalledWith();
    renderer.act(() => {
      wrapper.unmount();
    });
  });

  it('Should trigger search if query length is gt 3', () => {
    jest.useFakeTimers();
    const mockDispatch = jest.fn(() => { });
    useDispatch.mockReturnValue(mockDispatch);
    searchStockData.mockReturnValueOnce('test_action');
    const wrapper = renderer.create(
      <SearchBarInput text="" setText={jest.fn()} />,
    );
    act(() => {
      wrapper.update(<SearchBarInput text="123" setText={jest.fn()} />);
    });
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
    renderer.act(() => {
      jest.advanceTimersByTime(300);
    });
    expect(mockDispatch).toHaveBeenCalledWith('test_action');
    expect(searchStockData).toHaveBeenCalledWith('123');
    renderer.act(() => {
      wrapper.unmount();
    });
  });
});
