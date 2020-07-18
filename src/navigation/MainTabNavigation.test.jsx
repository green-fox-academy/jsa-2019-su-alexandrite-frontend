import renderer from 'react-test-renderer';
import { renderIcon } from './MainTabNavigation';
import investmentsIconActive from '../../assets/icons/bottom-tab/investments-active.png';

describe('<MainTabNavigation />', () => {
  it('renderIcon Should render and match the snapshot', () => {
    const tree = renderer.create(
      renderIcon(investmentsIconActive, '#eee'),
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
