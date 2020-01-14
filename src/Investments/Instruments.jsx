import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import Card from '../common/Card';
import Column from '../common/Column';
import styles from './styles';
import { round } from '../common/numbers';

const Instruments = () => {
  const { push } = useNavigation();
  const {
    isLoading,
    stocks,
    instruments,
    error,
  } = useSelector((state) => state.investments);

  return (
    !error ? (
      <>
        {isLoading && <ActivityIndicator size="large" style={styles.loading} color="#fff" />}
        {!isLoading && !error && stocks && (
          stocks.map(({ shares, symbol, entryPrice }) => (
            <Card
              title="Instruments"
              style={{ ...styles.instrumentContainer, marginTop: 15 }}
              key={symbol}
            >
              <View style={styles.companyTitle}>
                <Image
                  style={styles.companyLogo}
                  source={{ uri: `${instruments[symbol].logo}` }}
                />
                <Column style={styles.companyInformation}>
                  <Text style={styles.companyName}>{instruments[symbol].company}</Text>
                  <Text
                    style={styles.companyDescription}
                    numberOfLines={2}
                  >
                    {instruments[symbol].description}
                  </Text>
                </Column>
              </View>
              <View style={styles.details}>
                <Column style={styles.detailsColumn}>
                  <Text style={styles.detailNumber}>{shares}</Text>
                  <Text style={styles.detailLabel}>Positions</Text>
                </Column>
                <Column style={styles.detailsColumn}>
                  <Text style={styles.detailNumber}>{instruments[symbol].marketValue}</Text>
                  <Text style={styles.detailLabel}>Market Value</Text>
                </Column>
                <Column style={styles.detailsColumn}>
                  <Text style={styles.detailNumber}>
                    {round((instruments[symbol].marketValue - entryPrice) / entryPrice)}
                  </Text>
                  <Text style={styles.detailLabel}>Unrlzd P/L%</Text>
                </Column>
                <Column style={styles.detailsColumn}>
                  <Text style={styles.detailNumber}>
                    {round(instruments[symbol].marketValue - entryPrice)}
                  </Text>
                  <Text style={styles.detailLabel}>Unrlzd P/L</Text>
                </Column>
              </View>
              <TouchableHighlight
                activeOpacity={0.5}
                underlayColor="#0000"
                style={styles.viewMoreButton}
                onPress={() => push('StockDetails', { symbol })}
              >
                <Text style={styles.viewMoreText}>View more</Text>
              </TouchableHighlight>
            </Card>
          ))
        )}
      </>
    ) : <Text>{error.message}</Text>
  );
};

export default Instruments;
