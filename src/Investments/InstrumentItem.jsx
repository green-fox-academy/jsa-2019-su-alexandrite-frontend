import React, { useState } from 'react';
import {
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import PropTypes from 'prop-types';
import Card from '../common/Card';
import Column from '../common/Column';
import styles from './styles';
import { moneyAmount2String, decimal2Percentage } from '../common/numbers';
import Row from '../common/Row';
import { DetailsRow } from '../StockDetails/Stats';

const InstrumentItem = ({
  shares, symbol, entryPrice, instrument, index,
}) => {
  const { push } = useNavigation();
  const [descIsExpanded, setDescIsExpanded] = useState(false);
  const unrealizedPL = instrument.marketValue - entryPrice;
  const unrealizedPLPercent = unrealizedPL / entryPrice;
  return (
    <Card
      title={(index === 0) ? 'Instruments' : null}
      style={{ ...styles.instrumentContainer, marginTop: 15 }}
      key={symbol}
    >
      <Row style={styles.companyTitle}>
        <Image
          style={styles.companyLogo}
          source={{ uri: `${instrument.logo}` }}
        />
        <Column style={styles.companyInformation} flex={1}>
          <Text style={styles.companySymbol}>{symbol}</Text>
          <Text style={styles.companyName}>{instrument.company}</Text>
          <TouchableHighlight onPress={() => setDescIsExpanded(!descIsExpanded)} underlayColor="#eee">
            <Text
              style={styles.companyDescription}
              numberOfLines={descIsExpanded ? 0 : 3}
            >
              {instrument.description}
            </Text>
          </TouchableHighlight>
        </Column>
      </Row>
      <Row style={{ marginTop: 15, flexWrap: 'wrap', alignItems: 'center' }}>
        {DetailsRow('Positions', shares)}
        {DetailsRow('Market Value', moneyAmount2String(instrument.marketValue))}
        {DetailsRow('Unrlzd P/L%', `${decimal2Percentage(unrealizedPLPercent)}%`, unrealizedPLPercent > 0 ? '#50B113' : '#FF3636')}
        {DetailsRow('Unrlzd P/L', moneyAmount2String(unrealizedPL), unrealizedPL > 0 ? '#50B113' : '#FF3636')}
      </Row>
      <Row style={{ justifyContent: 'flex-end' }}>
        <TouchableHighlight
          activeOpacity={0.5}
          underlayColor="#0000"
          style={styles.viewMoreButton}
          onPress={() => push('StockDetails', { symbol })}
        >
          <Text style={styles.viewMoreText}>View Details</Text>
        </TouchableHighlight>
      </Row>
    </Card>
  );
};

InstrumentItem.propTypes = {
  shares: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
  entryPrice: PropTypes.number.isRequired,
  instrument: PropTypes.shape({
    logo: PropTypes.string,
    company: PropTypes.string,
    description: PropTypes.string,
    marketValue: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default InstrumentItem;
