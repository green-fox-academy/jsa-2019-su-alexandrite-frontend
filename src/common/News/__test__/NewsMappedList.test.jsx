import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { useNavigation } from 'react-navigation-hooks';
import NewsMappedList from '../NewsMappedList';

jest.mock('react-navigation-hooks');
jest.mock('../useFetchStockNews');

const sampleNews = [
  {
    id: '123',
    datetime: new Date('2019').getMilliseconds(),
    headline: 'headline',
    url: 'http://test.test',
    image: 'http://test.test/test.jpg',
  },
  {
    id: '321',
    datetime: new Date('2019').getMilliseconds(),
    headline: 'headline',
    url: 'http://test.test',
    image: 'http://test.test/test.jpg',
  },
];

describe('<NewsMappedList />', () => {
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
      <NewsMappedList news={sampleNews} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });


  // it('Should render properly and match the snapshot when image url not present', () => {
  //   const tree = renderer.create(
  //     <NewsListItem item={{ ...sampleNewsItem, image: null }} />,
  //   ).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });


  // it('Should navigate to NewsWebView with url passed', () => {
  //   const mockPush = jest.fn();
  //   useNavigation.mockReturnValueOnce({
  //     push: mockPush,
  //   });
  //   const wrapper = shallow(
  //     <NewsListItem item={sampleNewsItem} />,
  //   );
  //   wrapper.find('TouchableHighlight').first().simulate('press');
  //   expect(mockPush).toHaveBeenCalledWith('NewsWebView', { url: sampleNewsItem.url });
  // });
});
