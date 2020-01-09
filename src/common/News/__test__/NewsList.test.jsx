import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import useFetchStockNews from '../useFetchStockNews';
import NewsList, { ListFooter } from '../NewsList';

jest.mock('react-redux');
jest.mock('react-navigation-hooks');
jest.mock('../useFetchStockNews');
jest.mock('../NewsMappedList', () => 'NewsMappedList');
jest.mock('../NewsListItem', () => 'NewsListItem');

describe('<NewsList />', () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useFetchStockNews.mockReturnValue({
      news: [],
      isLoading: false,
      error: null,
    });
    useNavigation.mockReturnValue({
      push: jest.fn(),
      navigate: jest.fn(),
    });
  });

  afterAll(() => {
    jest.resetModules();
  });

  it('Should render properly and match the snapshot', () => {
    const tree = renderer.create(
      <NewsList query="test" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render properly and match the snapshot on error', () => {
    useFetchStockNews.mockReturnValueOnce({
      news: null,
      isLoading: false,
      error: {
        message: 'test error',
      },
    });
    const tree = renderer.create(
      <NewsList query="test" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render properly and match the snapshot when loading', () => {
    useFetchStockNews.mockReturnValueOnce({
      news: null,
      isLoading: true,
      error: null,
    });
    const tree = renderer.create(
      <NewsList query="test" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('keyExtractor should extract the id field of the items', () => {
    const wrapper = shallow(
      <NewsList query="test" />,
    );
    expect(wrapper.find('FlatList').props().keyExtractor({ id: '123' })).toBe('123');
  });

  it('ItemSeparatorComponent should match snapshot', () => {
    const wrapper = shallow(
      <NewsList query="test" />,
    );
    const separator = renderer.create(
      wrapper.find('FlatList').props().ItemSeparatorComponent(),
    ).toJSON();
    expect(separator).toMatchSnapshot();
  });

  it('renderItem should render NewsListItem and match snapshot', () => {
    const wrapper = shallow(
      <NewsList query="test" />,
    );
    const item = renderer.create(
      wrapper.find('FlatList').props().renderItem({ item: {} }),
    ).toJSON();
    expect(item).toMatchSnapshot();
  });

  it('listFooter should render and match snapshot on Loading', () => {
    const footer = renderer.create(
      <ListFooter errorMessage="" isLoading pageNumber={2} />,
    ).toJSON();
    expect(footer).toMatchSnapshot();
  });


  it('listFooter should render and match snapshot on onError', () => {
    const footer = renderer.create(
      <ListFooter errorMessage="error" isLoading={false} pageNumber={2} />,
    ).toJSON();
    expect(footer).toMatchSnapshot();
  });

  it('listFooter should not render when no error and not loading', () => {
    const footer = renderer.create(
      <ListFooter errorMessage="" isLoading={false} pageNumber={2} />,
    ).toJSON();
    expect(footer).toMatchSnapshot();
  });

  it('listFooter should not render when pageNumber is 1', () => {
    expect(ListFooter({ pageNumber: 1 })).toBeNull();
  });
});
