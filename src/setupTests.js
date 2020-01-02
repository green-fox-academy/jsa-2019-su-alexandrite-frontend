/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const mockStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
jest.mock('redux-persist/lib/storage', () => mockStorage);

jest.mock('react-native-dotenv', () => ({
  API_URL: 'https://sandbox.iexapis.com/stable',
  API_KEY: 'abcdefg1234567890',
}));

Enzyme.configure({ adapter: new Adapter() });
