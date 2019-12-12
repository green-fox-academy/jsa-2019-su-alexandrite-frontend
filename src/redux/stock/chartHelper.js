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

export default {
  processChartData: (data, range) => (
    (range === '1m' || range === '3m')
      ? processDailyData(data)
      : processMonthlyData(data)
  ),
};
