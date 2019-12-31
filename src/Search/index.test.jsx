import React from 'react';
import renderer from 'react-test-renderer';
import { useSelector, useDispatch } from 'react-redux';
import Search from './index';

const SAMPLE_STATE = {
  isLoading: false,
  result: [],
  error: '',
  touched: false,
};

jest.mock('react-redux');
jest.mock('../redux/watchList/actionCreator');
describe('<Search />', () => {
  beforeEach(() => {
    useSelector.mockReturnValueOnce(SAMPLE_STATE);
    useDispatch.mockReturnValueOnce(() => { });
  });

  afterAll(() => {
    jest.resetModules();
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const wrapper = renderer.create(<Search />);
    expect(wrapper).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  // test with snapshot
  it('Should render and match the snapshot', () => {
    const tree = renderer.create(
      <Search />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
