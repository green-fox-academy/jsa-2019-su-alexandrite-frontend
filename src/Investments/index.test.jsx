import React from 'react';
import renderer from 'react-test-renderer';
import Investments, { navigationOptions } from '.';
import SearchButton from '../common/HeaderSearchButton';

jest.useFakeTimers();

jest.mock('react-redux');
jest.mock('../redux/investment/actionCreator');
jest.mock('./PortfolioValue', () => '<PortfolioValue />');

describe('<Investments />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const wrapper = renderer.create(
      <Investments />,
    );
    expect(wrapper).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const tree = renderer.create(
      <Investments />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render header search button', () => {
    expect(navigationOptions.headerRight()).toEqual(<SearchButton />);
  });
});
