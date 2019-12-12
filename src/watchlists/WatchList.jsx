import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import WatchListItem from './WatchListItem';
import chevron from '../../assets/icons/watchList/chevron.png';
import Card from '../common/Card';
import styles from './styles';
import EditorMode from './EditorMode';
import EditorButton from './EditorButton';

export default function watchlist({ item }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isInEditMode, setIsEdit] = useState(false);
  const [checkedItems, setCheckedItems] = useState(item.stocks.map(() => false));

  function handleClick() {
    setIsOpen(!isOpen);
  }

  function updateChecked(i) {
    const copy = [...checkedItems];
    copy[i] = !copy[i];
    setCheckedItems(copy);
  }

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
            <WatchListItem
              key={stock.id}
              isInEditMode={isInEditMode}
              isChecked={checkedItems[i]}
              onSelect={() => updateChecked(i)}
              ticker={stock.ticker}
              currPrice={stock.currPrice}
              dailyChange={stock.dailyChange}
              volumn={stock.volumn}
            />
          ))}
          {isInEditMode
            ? <EditorMode checkedItems={checkedItems} isInEditMode={isInEditMode} toggleEditMode={setIsEdit} />
            : <EditorButton isEdit={isInEditMode} toggle={setIsEdit} />}
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
