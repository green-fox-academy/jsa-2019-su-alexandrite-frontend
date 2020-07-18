import React from 'react';
import renderer from 'react-test-renderer';
import { useDispatch, useSelector } from 'react-redux';
import PortfolioValue from './PortfolioValue';

jest.useFakeTimers();

jest.mock('react-redux');
jest.mock('../redux/investment/actionCreator');

const SAMPLE_STATE = {
  isLoading: false,
  totalValue: 123,
  error: null,
};

describe('<PortfolioValue />', () => {
  beforeEach(() => {
    useSelector.mockReturnValue(SAMPLE_STATE);
    useDispatch.mockReturnValue(jest.fn(() => { }));
  });

  afterAll(() => {
    jest.resetModules();
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const wrapper = renderer.create(
      <PortfolioValue />,
    );
    expect(wrapper).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const tree = renderer.create(
      <PortfolioValue />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render and match the snapshot when loading', () => {
    useSelector.mockReturnValue({ ...SAMPLE_STATE, isLoading: true });
    const tree = renderer.create(
      <PortfolioValue />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render and match the snapshot when error', () => {
    useSelector.mockReturnValue({ ...SAMPLE_STATE, error: { message: 'sample_error' } });
    const tree = renderer.create(
      <PortfolioValue />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
