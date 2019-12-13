import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableHighlight,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import WatchListItem from './WatchListItem';
import EditModeWatchListItem from './EditModeWatchListItem';
import chevron from '../../assets/icons/watchList/chevron.png';
import Card from '../common/Card';
import styles from './styles';
import EditFooter from './EditFooter';
import { deleteWatchList } from '../redux/watchList/actionCreator';

export default function watchlist({ item }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [checkedItems, setCheckedItems] = useState(item.stocks.map(() => false));
  const dispatch = useDispatch();

  function handleClick() {
    setIsOpen(!isOpen);
  }

  function selectItem(i) {
    const copy = [...checkedItems];
    copy[i] = !copy[i];
    setCheckedItems(copy);
  }

  const onDeleteWatchlist = () => Alert.alert(
    `${item.name}`,
    'Do you really want to delete this watchlist?',
    [
      {
        text: 'Delete',
        onPress: () => dispatch(deleteWatchList(item.id)),
        style: 'destructive',
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ],
    { cancelable: false },
  );

  return (
    <Card>
      <View style={styles.watchListTitle}>
        <Text style={styles.watchListCardTitle}>{item.name}</Text>
        <TouchableHighlight onPress={handleClick} style={styles.expandButton} underlayColor="#0000" activeOpacity={0.5}>
          <Image
            source={chevron}
            style={{
              transform: [{ rotateZ: isOpen ? '90deg' : '0deg' }],
            }}
          />
        </TouchableHighlight>
      </View>
      {isOpen && (
        <>
          {item.stocks.map((stock, i) => (
            isInEditMode
              ? (
                <EditModeWatchListItem
                  key={stock.ticker}
                  isChecked={checkedItems[i]}
                  onSelect={() => selectItem(i)}
                  ticker={stock.ticker}
                />
              ) : (
                <WatchListItem
                  key={stock.ticker}
                  ticker={stock.ticker}
                  currPrice={stock.currPrice}
                  dailyChange={stock.dailyChange}
                  volumn={stock.volumn}
                />
              )
          ))}
          <EditFooter
            checkedItems={checkedItems}
            isInEditMode={isInEditMode}
            toggleEditMode={setIsInEditMode}
            onDeleteWatchlist={onDeleteWatchlist}
          />
        </>
      )}
    </Card>
  );
}

watchlist.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    stocks: PropTypes.arrayOf(
      PropTypes.shape(
        WatchListItem.propTypes,
      ),
    ),
  }).isRequired,
};
