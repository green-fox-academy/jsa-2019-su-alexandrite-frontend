export const decimal2Percentage = (n, round = 2) => {
  const roundFactor = 10 ** round;
  return Math.round(n * 100 * roundFactor) / roundFactor;
};

export const round = (n, dPlaces = 2) => {
  const roundFactor = 10 ** dPlaces;
  return Math.round(n * roundFactor) / roundFactor;
};

export const processLargeNumbers = (n) => {
  if (n < 1000) return n;
  if (n < 1000000) return `${round(n / 1000)}K`;
  if (n < 1000000000) return `${round(n / 1000000)}M`;
  return `${round(n / 1000000000)}B`;
};

export const addComma = (n) => `${n}`
  .split('.')[0]
  .split('')
  .reverse()
  .map((c, i) => (!i || i % 3 ? c : `${c},`))
  .reverse()
  .join('');
