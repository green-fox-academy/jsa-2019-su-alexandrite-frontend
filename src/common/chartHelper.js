import randomColor from 'randomcolor';
import constants from './constants';

const formatXLabel = (i, range, label, firstOccurrence) => {
  if (range === '1m') {
    // if display data by days, we need to
    // filter half of the values so that the UI remains clean
    return !(parseInt(i, 10) % 2) ? label.substr(8, 10) : '';
  }
  if (range === '3m') {
    return firstOccurrence[label.substr(0, 7)] === i
      ? constants.MONTHS[new Date(label.substr(0, 7)).getMonth()] : '';
  }
  if (['1y', '2y', '5y'].indexOf(range) > -1) {
    // if display data by years, display the year label only
    // on January data points
    return (label.substr(5, 7) === '01') ? label.substr(0, 4) : '';
  }
  return constants.MONTHS[new Date(label).getMonth()];
};

const firstOccurrence = (keys, range) => {
  if (range === '3m') {
    return keys.reduce((result, key, i) => ({
      ...result,
      ...(result[key.substr(0, 7)] || { [key.substr(0, 7)]: i }),
    }), {});
  }
  return null;
};

const processMonthlyData = (data) => {
  // we need to group and calculate the avg by months
  const yearMonth2Data = data.reduce((result, curr) => {
    const key = curr.date.substr(0, 7);
    return {
      ...result,
      [key]: result[key] ? [...result[key], curr.close] : [curr.close],
    };
  }, {});

  return Object.keys(yearMonth2Data).reduce((result, key) => ({
    ...result,
    [key]: yearMonth2Data[key].reduce((a, b) => a + b) / yearMonth2Data[key].length,
  }), {});
};

const processDailyData = (data) => data.reduce((result, curr) => ({
  ...result,
  [curr.date]: curr.close,
}), {});

const processInvestmentAllocationData = (stocks, prices) => {
  const sector2value = stocks
    .reduce((result, curr) => ({
      ...result,
      ...{
        [curr.sector]: (result[curr.sector]
          ? result[curr.sector] + curr.shares * prices[curr.symbol].price
          : curr.shares * prices[curr.symbol].price
        ),
      },
    }), {});

  const sorted = Object.keys(sector2value).map((sector) => ({
    key: sector,
    value: sector2value[sector],
  })).sort((a, b) => b.value - a.value);

  return sorted.reduce((result, sector, i) => {
    if (i < constants.PIE_CHART_LEGEND_LIMIT) {
      return [
        ...result,
        {
          ...sector,
          svg: {
            fill: randomColor({
              luminosity: 'bright',
              seed: sector.key,
            }),
          },
        },
      ];
    }
    if (i === constants.PIE_CHART_LEGEND_LIMIT) {
      return [
        ...result,
        {
          key: 'Other',
          value: sector.value,
          svg: {
            fill: '#ccc',
          },
        },
      ];
    }
    return [
      ...result.slice(0, constants.PIE_CHART_LEGEND_LIMIT),
      {
        ...result[constants.PIE_CHART_LEGEND_LIMIT],
        value: result[constants.PIE_CHART_LEGEND_LIMIT].value + sector.value,
      },
    ];
  }, []);
};

export default {
  processChartData: (data, range) => (
    (range === '1m' || range === '3m')
      ? processDailyData(data)
      : processMonthlyData(data)
  ),
  formatXLabel,
  firstOccurrence,
  processInvestmentAllocationData,
};
