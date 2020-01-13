import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { useNavigation } from 'react-navigation-hooks';
import MockDate from 'mockdate';

import NewsListItem from '../NewsListItem';

jest.mock('react-navigation-hooks');
jest.mock('../useFetchStockNews');

MockDate.set('2020-01-10T04:46:05.638Z');

const sampleNewsItem = {
  datetime: '2020-01-10T04:46:05.638Z',
  headline: 'headline',
  url: 'http://test.test',
  image: 'http://test.test/test.jpg',
};

describe('<NewsListItem />', () => {
  beforeEach(() => {
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
      <NewsListItem item={sampleNewsItem} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('Should render properly and match the snapshot when image url not present', () => {
    const tree = renderer.create(
      <NewsListItem item={{ ...sampleNewsItem, image: null }} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('Should navigate to NewsWebView with url passed', () => {
    const mockPush = jest.fn();
    useNavigation.mockReturnValueOnce({
      push: mockPush,
    });
    const wrapper = shallow(
      <NewsListItem item={sampleNewsItem} />,
    );
    wrapper.find('TouchableHighlight').first().simulate('press');
    expect(mockPush).toHaveBeenCalledWith('NewsWebView', { url: sampleNewsItem.url });
  });
});
