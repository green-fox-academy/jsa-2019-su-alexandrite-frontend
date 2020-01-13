import React from 'react';
import renderer from 'react-test-renderer';
import { useDispatch } from 'react-redux';
import Investments from '.';
import SearchButton from '../common/HeaderSearchButton';
import { calculatePortfolioValue } from '../redux/investment/actionCreator';

jest.useFakeTimers();

jest.mock('react-redux');
jest.mock('../redux/investment/actionCreator');
jest.mock('./PortfolioValue', () => '<PortfolioValue />');
jest.mock('./PortfolioNews', () => '<PortfolioNews />');

describe('<Investments />', () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn(() => { }));
  });

  afterAll(() => {
    jest.resetModules();
  });

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
    expect(Investments.navigationOptions.headerRight()).toEqual(<SearchButton />);
  });

  it('Should dispatch calculatePortfolioValue onload', () => {
    const mockDispatch = jest.fn(() => { });
    useDispatch.mockReturnValueOnce(mockDispatch);
    calculatePortfolioValue.mockReturnValue('test_action');
    const wrapper = renderer.create(
      <Investments />,
    );
    wrapper.update(<Investments />);
    expect(useDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith('test_action');
  });
});
