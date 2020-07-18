import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Watchlist from './WatchList';

jest.mock('react-redux');
jest.mock('../redux/watchList/actionCreator');
jest.mock('../Watchlists/WatchListItem.jsx', () => '<WatchlistItem />');
jest.mock('../Watchlists/EditModeWatchListItem.jsx', () => '<EditModeWatchListItem />');

const SAMPLE_STATE = {
  isOpen: false,
  isInEditMode: false,
  checkedItems: [],
};

describe('<Watchlist />', () => {
  beforeEach(() => {
    useSelector.mockReturnValue(SAMPLE_STATE);
    useDispatch.mockReturnValue(jest.fn(() => { }));
  });

  afterAll(() => {
    jest.resetModules();
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');

    const wrapper = shallow(<Watchlist item={{
      id: 1,
      name: 'app',
      stocks: [
        {
          ticker: 'MSFT',
          currPrice: 123.1,
          dailyChange: -3.4,
          volume: '43M',
        },
      ],
    }}
    />);

    expect(wrapper).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  it('shoud render watchlist and match snapshot', () => {
    const tree = renderer.create(
      <Watchlist item={{
        id: 1,
        name: 'app',
        stocks: [],
      }}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render empty text and match snapshot when watchlist is empty', () => {
    const tree = renderer.create(
      <Watchlist item={{
        id: 1,
        name: 'app',
        stocks: [],
      }}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render stock details and match snapshot when watchlist is not empty', () => {
    const tree = renderer.create(
      <Watchlist item={{
        id: 1,
        name: 'app',
        stocks: [
          {
            ticker: 'MSFT',
            currPrice: 123.1,
            dailyChange: -3.4,
            volume: '43M',
          },
        ],
      }}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render stock details and match snapshot when watchlist is open', () => {
    useSelector.mockReturnValue({ ...SAMPLE_STATE, isOpen: false });
    const tree = renderer.create(
      <Watchlist item={{
        id: 1,
        name: 'app',
        stocks: [
          {
            ticker: 'MSFT',
            currPrice: 123.1,
            dailyChange: -3.4,
            volume: '43M',
          },
        ],
      }}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render stock details and match snapshot when watchlist is not open', () => {
    useSelector.mockReturnValue({ ...SAMPLE_STATE, isOpen: true });
    const tree = renderer.create(
      <Watchlist item={{
        id: 1,
        name: 'app',
        stocks: [
          {
            ticker: 'MSFT',
            currPrice: 123.1,
            dailyChange: -3.4,
            volume: '43M',
          },
        ],
      }}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
