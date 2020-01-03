import chartHelper from './chartHelper';

describe('chartHelper.firstOccurrence', () => {
  it('Should return null if range is not \'3m\'', () => {
    expect(chartHelper.firstOccurrence([], '1y')).toBeNull();
  });
  it('Should return first occurrence if range is \'3m\'', () => {
    const sampleData = [
      '2010-12-02',
      '2010-12-12',
      '2010-12-14',
      '2010-11-28',
      '2019-03-28',
      '2018-11-28',
      '2019-03-11',
    ];
    expect(chartHelper.firstOccurrence(sampleData, '3m')).toStrictEqual({
      '2010-11': 3,
      '2010-12': 0,
      '2018-11': 5,
      '2019-03': 4,
    });
  });
});
