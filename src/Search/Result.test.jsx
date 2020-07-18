import React from 'react';
import { useSelector } from 'react-redux';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Result from './Result';
import ResultItem from './ResultItem';

jest.mock('react-redux');

const SAMPLE_STATE = {
  search: {
    isLoading: false,
    result: [{
      symbol: 'AAPL',
      exchange: 'asdasd',
    }],
    error: null,
    touched: true,
  },
};
describe('<Result />', () => {
  beforeEach(() => {
    useSelector.mockReturnValue(SAMPLE_STATE);
  });

  afterAll(() => {
    jest.resetModules();
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const wrapper = shallow(<Result />);
    expect(wrapper).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const tree = renderer.create(
      <Result />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render and match the snapshot when touched and no result available', () => {
    useSelector.mockReturnValueOnce({ ...SAMPLE_STATE, touched: true, result: [] });
    const tree = renderer.create(
      <Result />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render and match the snapshot when not touched and no result available', () => {
    useSelector.mockReturnValueOnce({ ...SAMPLE_STATE, touched: false, result: [] });
    const tree = renderer.create(
      <Result />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render and match the snapshot when loading', () => {
    useSelector.mockReturnValueOnce({ ...SAMPLE_STATE, isLoading: true });
    const tree = renderer.create(
      <Result />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render and match the snapshot on error', () => {
    useSelector.mockReturnValueOnce({ ...SAMPLE_STATE, error: { message: 'sample message' } });
    const tree = renderer.create(
      <Result />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('FlatList key extractor should get the symbol field of the data elements', () => {
    const wrapper = shallow(
      <Result />,
    );
    const sampleData = {
      symbol: 'AAPL',
    };
    const { keyExtractor } = wrapper.find('FlatList').props();
    expect(keyExtractor(sampleData)).toEqual(sampleData.symbol);
  });

  it('FlatList renderItem should render resultItem', () => {
    const wrapper = shallow(
      <Result />,
    );
    const sampleData = SAMPLE_STATE.search.result[0];
    const { renderItem } = wrapper.find('FlatList').props();
    expect(renderItem({ item: sampleData }))
      .toEqual(<ResultItem symbol={sampleData.symbol} exchange={sampleData.exchange} />);
  });
});
