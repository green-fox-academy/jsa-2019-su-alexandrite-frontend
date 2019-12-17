import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import style from '../style';
import constants from '../../common/constants';
import ChartTimeRangeButton from './ChartTimeRangeButton';

const TimeRangeSelector = ({ selected, onSelect }) => (
  <View style={style.perfChartTimeRangeSelector}>
    {constants.STOCK_CHART_TIME_RANGES.map((range) => {
      const active = range === selected;
      return (
        <ChartTimeRangeButton
          key={range}
          range={range}
          active={active}
          onPress={() => onSelect(range)}
        />
      );
    })}
  </View>
);

TimeRangeSelector.propTypes = {
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default TimeRangeSelector;
