const processMonthlyData = (data) => {
  // we need to group and calculate the avg by months
  const yearMonth2Data = {};
  const yearMonth2Avg = {};

  data.forEach((dailyData) => {
    const key = dailyData.date.substr(0, 7);
    yearMonth2Data[key] = yearMonth2Data[key]
      ? [...yearMonth2Data[key], dailyData.close]
      : [dailyData.close];
  });

  const keys = Object.keys(yearMonth2Data);

  keys.forEach((key) => {
    const sum = yearMonth2Data[key].reduce((a, b) => a + b);
    const count = yearMonth2Data[key].length;
    yearMonth2Avg[key] = sum / count;
  });

  return {
    data: keys.map((key) => yearMonth2Avg[key]),
    keys,
  };
};

const processDailyData = (data) => ({
  data: data.map((dailyData) => dailyData.close),
  keys: data.map((dailyData) => dailyData.date.substr(8, 10)),
});

export default {
  processChartData: (data, range) => {
    if (['1y', '2y', '5y', '6m', '3m'].indexOf(range) > -1) {
      return processMonthlyData(data);
    }
    if (range === '1m') {
      return processDailyData(data);
    }
    return {};
  },
};
