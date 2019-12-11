const processMonthlyData = (data, range) => {
  // we need to group and calculate the avg by months
  const key2Data = {};
  const key2Avg = {};

  data.forEach((dailyData) => {
    const key = dailyData.date.substr(0, 7);
    key2Data[key] = key2Data[key] ? [...key2Data[key], dailyData.close] : [dailyData.close];
  });

  const keys = Object.keys(key2Data);

  keys.forEach((key) => {
    const sum = key2Data[key].reduce((a, b) => a + b);
    const count = key2Data[key].length;
    key2Avg[key] = sum / count;
  });

  return {
    [range]: {
      data: keys.map((key) => key2Avg[key]),
      keys,
    },
  };
};

const processDailyData = (data, range) => ({
  [range]: {
    data: data.map((dailyData) => dailyData.close),
    keys: data.map((dailyData) => dailyData.date.substr(8, 10)),
  },
});

export default {
  processChartData: (data, range) => {
    if (['1y', '2y', '5y', '6m', '3m'].indexOf(range) > -1) {
      return processMonthlyData(data, range);
    }
    if (range === '1m') {
      return processDailyData(data, range);
    }
    return {};
  },
};
