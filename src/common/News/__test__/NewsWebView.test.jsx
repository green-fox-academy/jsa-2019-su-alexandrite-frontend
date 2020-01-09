import React from 'react';
import renderer from 'react-test-renderer';
import { useNavigationParam } from 'react-navigation-hooks';
import { shallow } from 'enzyme';
import { LayoutAnimation } from 'react-native';
import NewsWebView from '../NewsWebView';

jest.mock('react-navigation-hooks');
jest.mock('../../ProgressBar.jsx', () => 'ProgressBar');

describe('<NewsWebView />', () => {
  beforeEach(() => {
    useNavigationParam.mockReturnValue({
      uri: 'test uri',
    });
  });

  afterAll(() => {
    jest.resetModules();
  });

  it('Should render properly and match the snapshot', () => {
    const tree = renderer.create(
      <NewsWebView />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render ProgressBar and match the snapshot', () => {
    const wrapper = shallow(<NewsWebView />);
    const tree = renderer.create(
      wrapper.find('WebView').props().renderLoading(),
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render ProgressBar and match the snapshot', () => {
    const wrapper = shallow(<NewsWebView />);
    const mockConfigureNext = jest.fn();
    // https://github.com/testing-library/native-testing-library/issues/26#issuecomment-536998442
    jest.mock('react-native/Libraries/LayoutAnimation/LayoutAnimation', () => ({
      ...require.requireActual(
        'react-native/Libraries/LayoutAnimation/LayoutAnimation',
      ),
      configureNext: mockConfigureNext,
    }));
    wrapper.find('WebView').props().onLoadProgress({ nativeEvent: { progress: 0.5 } });
    expect(mockConfigureNext).toHaveBeenCalledWith(LayoutAnimation.Presets.linear);
  });
});
