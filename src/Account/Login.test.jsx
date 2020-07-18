import React from 'react';
import renderer from 'react-test-renderer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';

import Login from './Login';

jest.mock('react-redux');
jest.mock('../redux/account/actionCreator');
jest.mock('react-navigation-hooks');

const SAMPLE_STATE = {
  accseeToken: 'aaabbbcccdddeeefffggghhhiiijjjkkkklllmmmnnn',
  error: null,
  isLoggingIn: false,
};

describe('<Login />', () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn(() => { }));
  });

  it('Expect to not log errors in console', () => {
    useSelector.mockReturnValue(SAMPLE_STATE);
    const pop = jest.fn(() => { });
    useNavigation.mockReturnValue({ pop });
    const spy = jest.spyOn(global.console, 'error');
    const wrapper = renderer.create(
      <Login />,
    );
    expect(wrapper).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot without error', () => {
    useSelector.mockReturnValue(SAMPLE_STATE);
    const tree = renderer.create(
      <Login />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render and match the snapshot with error', () => {
    useSelector.mockReturnValue({ ...SAMPLE_STATE, error: 'error message' });

    const tree = renderer.create(
      <Login isLoading="true" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render and match the snapshot when loading', () => {
    useSelector.mockReturnValue({ ...SAMPLE_STATE, isLoggingIn: true });
    const tree = renderer.create(
      <Login />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
