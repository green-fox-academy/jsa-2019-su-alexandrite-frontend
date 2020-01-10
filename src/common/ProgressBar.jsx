import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ProgressBar = ({ progress }) => (
  <View style={styles.progressBar}>
    <View style={{ flexDirection: 'column', backgroundColor: '#4d63be', flex: progress }} />
    <View style={{ flexDirection: 'column', flex: 1 - progress }} />
  </View>
);

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
