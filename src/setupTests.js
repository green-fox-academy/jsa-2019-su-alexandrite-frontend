/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
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
