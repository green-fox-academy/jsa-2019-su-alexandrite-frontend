import PropTypes from 'prop-types';
import React from 'react';
import {
  Text, View, Image, TouchableHighlight,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import tradeIcon from '../../assets/icons/watchList/trade.png';
import detailIcon from '../../assets/icons/watchList/detail.png';

export default function watchListItem({
  isEdit,
  isChecked,
  onSelect,
  ticker,
  currPrice,
  dailyChange,
  volumn,
}) {
  return (
    <TouchableHighlight
      style={styles.checkButton}
      onPress={onSelect}
      disabled={!isEdit}
    >
      <View style={styles.watchListItem}>
        {isEdit && <MaterialIcons name={isChecked ? 'check-box' : 'check-box-outline-blank'} />}
        <View style={styles.watchListItemColumn}>
          <Text style={[styles.watchListItemColumnText, { fontWeight: 'bold', color: '#566ed3' }]}>
            {ticker}
          </Text>
        </View>
        {isEdit ? null
          : (
            <>
              <View style={styles.watchListItemColumn}>
                <Text style={styles.watchListItemColumnText}>
                  {currPrice}
                </Text>
              </View>
              <View style={styles.watchListItemColumn}>
                {dailyChange > 0 ? (
                  <Text style={[styles.watchListItemColumnText, { color: '#21af78' }]}>
                    {`+${dailyChange}%`}
                  </Text>
                ) : (
                  <Text style={[styles.watchListItemColumnText, { color: '#d82f2f' }]}>
                    {`${dailyChange}%`}
                  </Text>
                )}
              </View>
              <View style={styles.watchListItemColumn}>
                <Text style={styles.watchListItemColumnText}>
                  {volumn}
                </Text>
              </View>
              <View style={[styles.watchListItemColumn, { flexDirection: 'row' }]}>
                <Image source={tradeIcon} />
                <Image source={detailIcon} />
              </View>
            </>
          )}
      </View>
    </TouchableHighlight>

  );
}

watchListItem.propTypes = {
  isEdit: PropTypes.bool.isRequired,
  ticker: PropTypes.string.isRequired,
  currPrice: PropTypes.number.isRequired,
  dailyChange: PropTypes.number.isRequired,
  volumn: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};
