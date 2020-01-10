/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/extend-expect';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.useFakeTimers();

const mockStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
jest.mock('redux-persist/lib/storage', () => mockStorage);

jest.mock('redux-persist', () => ({
  persistReducer: jest.fn(() => { }),
  persistStore: jest.fn(() => { }),
}));

jest.mock('redux', () => ({
  combineReducers: jest.fn(() => { }),
  createStore: jest.fn(() => { }),
  applyMiddleware: jest.fn(() => () => () => { }),
}));

Enzyme.configure({ adapter: new Adapter() });
