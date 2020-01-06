import {
  decimal2Percentage,
  round,
  processLargeNumbers,
  moneyAmount2String,
} from './numbers';

test('decimal2Percentage should change the number from decimal to percentage', () => {
  expect(decimal2Percentage(0.50)).toBe(50);
});

test('round should keep two decimal places for numbers', () => {
  expect(round(1234.5678)).toBe(1234.57);
});

test('processLargeNumbers should transfer number to use K/M/B', () => {
  expect(processLargeNumbers(999.99)).toBe(999.99);
  expect(processLargeNumbers(12345.67)).toBe('12.35K');
  expect(processLargeNumbers(1234567.89)).toBe('1.23M');
  expect(processLargeNumbers(1234567890.123)).toBe('1.23B');
});

test('moneyAmount2String should transfer number to dollar format', () => {
  expect(moneyAmount2String(1234.5678)).toBe('$1,234.57');
});
