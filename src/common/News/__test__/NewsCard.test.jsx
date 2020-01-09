import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import useFetchStockNews from '../useFetchStockNews';
import NewsCard from '../NewsCard';

jest.mock('react-redux');
jest.mock('react-navigation-hooks');
jest.mock('../NewsMappedList', () => '<NewsMappedList />');
jest.mock('../useFetchStockNews');

describe('<Popup />', () => {
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
      <NewsCard query="test" />,
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
      <NewsCard query="test" />,
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
      <NewsCard query="test" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should navigate to NewsList with query passed', () => {
    const mockNavigate = jest.fn();
    useNavigation.mockReturnValueOnce({
      navigate: mockNavigate,
    });
    const wrapper = shallow(
      <NewsCard query="test" />,
    );
    wrapper.find('TouchableHighlight').first().simulate('press');
    expect(mockNavigate).toHaveBeenCalledWith('NewsList', { query: 'test' });
  });
});
