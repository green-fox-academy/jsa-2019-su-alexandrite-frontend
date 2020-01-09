import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';
// import { useNavigation } from 'react-navigation-hooks';

import ProgressBar from './ProgressBar';

jest.mock('react-navigation-hooks');

describe('<ProgressBar />', () => {
  it('should render properly and match the snapshot', () => {
    const tree = renderer.create(
      <ProgressBar
        progress={0.5}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
