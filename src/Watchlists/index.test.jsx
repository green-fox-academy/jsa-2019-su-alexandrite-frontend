import React from 'react';
import { shallow } from 'enzyme';
import { useDispatch, useSelector } from 'react-redux';
import renderer from 'react-test-renderer';
import Watchlists from './index';
import { fetchWatchlistDetails } from '../redux/watchList/actionCreator';

jest.useFakeTimers();

jest.mock('react-redux');
jest.mock('../redux/watchList/actionCreator');
jest.mock('../Watchlists/WatchList.jsx', () => '<Watchlist />');
jest.mock('../common/Popup', () => '<Popup />');
jest.mock('../common/ErrorMessage', () => '<ErrorMessage />');
jest.mock('../common/Card', () => '<Card />');

const SAMPLE_STATE = {
  watchlists: [
    {
      id: 123,
      name: 'Sample',
      stocks: [
        {
          ticker: 'AAPL', currPrice: 123, dailyChange: 1.3, volume: '12B',
        },
        {
          ticker: 'MSFT', currPrice: 123.1, dailyChange: -3.4, volume: '43M',
        },
      ],
    },
  ],
  watchlistDetailsError: null,
  isLoadingWatchlistDetails: false,
};

describe('<Watchlists />', () => {
  beforeEach(() => {
    useSelector.mockReturnValue(SAMPLE_STATE);
    useDispatch.mockReturnValue(jest.fn(() => { }));
  });

  afterAll(() => {
    jest.resetModules();
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');

    const wrapper = shallow(<Watchlists />);

    expect(wrapper).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const tree = renderer.create(
      <Watchlists />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should not dispatch fetch stock details if watchlists are empty', () => {
    const mockDispatch = jest.fn(() => { });
    useDispatch.mockReturnValueOnce(mockDispatch);
    fetchWatchlistDetails.mockReturnValueOnce('test_action');
    useSelector.mockReturnValueOnce({
      watchlists: [],
      watchlistDetailsError: null,
      isLoadingWatchlistDetails: false,
    });
    const wl = renderer.create(
      <Watchlists />,
    );
    wl.update(<Watchlists />);
    expect(mockDispatch).not.toHaveBeenCalled();
  });

  it('Should dispatch fetch stock details onload when watchlists not empty', () => {
    const mockDispatch = jest.fn(() => { });
    useDispatch.mockReturnValue(mockDispatch);
    fetchWatchlistDetails.mockReturnValueOnce('test_action');
    const wl = renderer.create(
      <Watchlists />,
    );
    wl.update(<Watchlists />);
    expect(useDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith('test_action');
  });
});
