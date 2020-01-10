import chartHelper from './chartHelper';

describe('chartHelper.formatXLabel', () => {
  it('Should return day of month if range is \'1m\' and index is even', () => {
    expect(chartHelper.formatXLabel(0, '1m', '2019-01-02')).toBe('02');
  });

  it('Should return empty string if range is \'1m\' and index is odd', () => {
    expect(chartHelper.formatXLabel(1, '1m', '2019-01-02')).toBe('');
  });

  it('Should return text rep of month if range is \'3m\' and index is first occurrence', () => {
    expect(chartHelper.formatXLabel(1, '3m', '2019-01-02', { '2019-01': 1 })).toBe('Jan');
  });

  it('Should return empty string if range is \'3m\' and index is not first occurrence', () => {
    expect(chartHelper.formatXLabel(1, '3m', '2019-01-02', { '2019-01': 2 })).toBe('');
  });

  it('Should return year if range is \'1y\', \'2y\' or \'5y\' and month is Januaray', () => {
    expect(chartHelper.formatXLabel(1, '1y', '2019-01-02')).toBe('2019');
  });
  it('Should return empty string if range is \'1y\', \'2y\' or \'5y\' and month is not Janurary', () => {
    expect(chartHelper.formatXLabel(1, '1y', '2019-02-02')).toBe('');
  });

  it('Should string rep of month if range is not covered above', () => {
    expect(chartHelper.formatXLabel(1, '6y', '2019-02-02')).toBe('Feb');
  });
});

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

describe('chartHelper.processMonthlyData', () => {
  it('Should return processed avg data given raw data with range in years', () => {
    const sampleData = [
      {
        date: '2019-01-09',
        close: 12,
      },
      {
        date: '2019-01-10',
        close: 13,
      },
      {
        date: '2019-01-11',
        close: 14,
      },
      {
        date: '2019-02-01',
        close: 13,
      },
    ];
    const sampleResult = {
      '2019-01': 13,
      '2019-02': 13,
    };
    expect(chartHelper.processChartData(sampleData, '1y')).toStrictEqual(sampleResult);
  });

  it('Should return processed daily given raw data with range in months', () => {
    const sampleData = [
      {
        date: '2019-01-09',
        close: 12,
      },
      {
        date: '2019-01-10',
        close: 13,
      },
      {
        date: '2019-01-11',
        close: 14,
      },
      {
        date: '2019-02-01',
        close: 13,
      },
    ];
    const sampleResult = {
      '2019-01-09': 12,
      '2019-01-10': 13,
      '2019-01-11': 14,
      '2019-02-01': 13,
    };
    expect(chartHelper.processChartData(sampleData, '1m')).toStrictEqual(sampleResult);
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
