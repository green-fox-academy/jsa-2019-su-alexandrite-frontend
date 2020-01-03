import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { useNavigation } from 'react-navigation-hooks';
import ResultItem from './ResultItem';

jest.mock('react-redux');
jest.mock('../redux/search/actionCreator');
jest.mock('react-navigation-hooks');

describe('<ResultItem />', () => {
  beforeEach(() => {
    useNavigation.mockReturnValue({
      push: jest.fn(),
    });
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const wrapper = shallow(<ResultItem symbol="AAPL" exchange="test" />);
    expect(wrapper).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const tree = renderer.create(
      <ResultItem symbol="AAPL" exchange="test" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should call navigation.push and pass \'StockDetails\' and {symbol}', () => {
    const mockPush = jest.fn();
    useNavigation.mockReturnValueOnce({
      push: mockPush,
    });
    const wrapper = shallow(
      <ResultItem symbol="AAPL" exchange="test" />,
    );
    wrapper.find({ testID: 'details-button' }).first().simulate('press');
    expect(mockPush).toHaveBeenCalledWith('StockDetails', { symbol: 'AAPL' });
  });
});
