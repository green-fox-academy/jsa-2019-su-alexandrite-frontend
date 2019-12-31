import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import renderer from 'react-test-renderer';
import Watchlists from './index';

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
    // useNavigation.mockReturnValueOnce({
    //   push: jest.fn(() => { }),
    // });
    useSelector.mockReturnValueOnce(SAMPLE_STATE);
    useDispatch.mockReturnValueOnce(() => { });
  });

  afterAll(() => {
    jest.resetModules();
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const wrapper = renderer.create(<Watchlists />);
    expect(wrapper).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const tree = renderer.create(
      <Watchlists />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('Should render properly', () => {
  //   const wrapper = renderer.create(<Watchlists />);
  //   expect(wrapper.find('FlatList').children.length).toBe(1);
  // });
});
