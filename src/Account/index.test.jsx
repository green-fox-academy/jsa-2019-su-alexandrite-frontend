/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import renderer from 'react-test-renderer';
import { useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';

import Account from './index';

jest.mock('react-redux');
jest.mock('../redux/account/actionCreator');
jest.mock('react-navigation-hooks');

const SAMPLE_STATE = {
  accseeToken: 'aaabbbcccdddeeefffggghhhiiijjjkkkklllmmmnnn',
  error: null,
  isLoggingIn: false,
};

describe('<Account />', () => {
  it('Expect to not log errors in console', () => {
    useSelector.mockReturnValue(SAMPLE_STATE);
    const push = jest.fn(() => { });
    useNavigation.mockReturnValue({ push });
    const spy = jest.spyOn(global.console, 'error');
    const wrapper = renderer.create(
      <Account />,
    );
    expect(wrapper).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot with accessToken', () => {
    useSelector.mockReturnValue(SAMPLE_STATE);
    const tree = renderer.create(
      <Account />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render and match the snapshot without accessToken', () => {
    useSelector.mockReturnValue({ ...SAMPLE_STATE, accessToken: null });
    const tree = renderer.create(
      <Account />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
