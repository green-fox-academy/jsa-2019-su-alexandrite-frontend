import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import WatchListItem from './WatchListItem';
import EditModeWatchListItem from './EditModeWatchListItem';
import WatchList from './WatchList';
import EditFooter from './EditFooter';

jest.mock('react-redux');
jest.mock('../redux/watchList/actionCreator');
jest.mock('../Watchlists/WatchListItem.jsx', () => '<WatchlistItem />');
jest.mock('../Watchlists/EditModeWatchListItem.jsx', () => '<EditModeWatchListItem />');
jest.mock('../Watchlists/WatchList.jsx', () => '<WatchList />');

const mockedState = {
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

describe('<WatchList />', () => {
  beforeEach(() => {
    useSelector.mockReturnValue(mockedState);
    useDispatch.mockReturnValue(jest.fn(() => { }));
  });

  afterAll(() => {
    jest.resetModules();
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');

    const wrapper = shallow(<WatchList />);

    expect(wrapper).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render watchlistitem if the watchlist is not empty and match the snapshot', () => {
    const tree = renderer.create(
      <WatchListItem
        ticker
        currPrice
        dailyChange
        volume
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render editmodewatchlistitem and match the snapshot', () => {
    const tree = renderer.create(
      <EditModeWatchListItem
        isChecked={false}
        onSelect={jest.fn()}
        ticker
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render editfooter and match the snapshot', () => {
    const tree = renderer.create(
      <EditFooter
        checkedItems={[]}
        isInEditMode={false}
        toggleEditMode={jest.fn()}
        onDeleteWatchlist={jest.fn()}
        onDeleteStocks={jest.fn()}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
