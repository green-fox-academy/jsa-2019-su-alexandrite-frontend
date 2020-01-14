import React from 'react';
import {
  Text,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import style from '../style';

const ChartTimeRangeButton = ({ range, active, onPress }) => (
  <TouchableHighlight
    style={[
      style.perfChartButton,
      active && style.perfChartButtonActive,
    ]}
    underlayColor="#0001"
    activeOpacity={0.5}
    onPress={() => onPress()}
  >
    <Text
      style={[
        style.perfChartButtonText,
        active && style.perfChartButtonTextActive,
      ]}
    >
      {range.toUpperCase()}
    </Text>
  </TouchableHighlight>
);

ChartTimeRangeButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  active: PropTypes.bool,
  range: PropTypes.string.isRequired,
};

ChartTimeRangeButton.defaultProps = {
  active: false,
};

export default ChartTimeRangeButton;
