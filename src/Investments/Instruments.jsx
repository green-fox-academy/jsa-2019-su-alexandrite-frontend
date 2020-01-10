import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import Card from '../common/Card';
import Column from '../common/Column';
import styles from './styles';

const Instruments = () => {
  const { push } = useNavigation();
  return (
    <Card title="Instruments">
      <View style={styles.companyTitle}>
        <Image
          style={styles.companyLogo}
          source={{ uri: 'https://storage.googleapis.com/iex/api/logos/AAPL.png' }}
        />
        <Column style={styles.companyInformation}>
          <Text style={styles.companyName}>Company</Text>
          <Text style={styles.companyDescription}>description</Text>
        </Column>
      </View>
      <View style={styles.details}>
        <Column style={styles.detailsColumn}>
          <Text style={styles.detailNumber}>136</Text>
          <Text style={styles.detailLabel}>Positions</Text>
        </Column>
        <Column style={styles.detailsColumn}>
          <Text style={styles.detailNumber}>11863.28</Text>
          <Text style={styles.detailLabel}>Market Value</Text>
        </Column>
        <Column style={styles.detailsColumn}>
          <Text style={styles.detailNumber}>4.5%</Text>
          <Text style={styles.detailLabel}>Unrizd P/L%</Text>
        </Column>
        <Column style={styles.detailsColumn}>
          <Text style={styles.detailNumber}>510.86</Text>
          <Text style={styles.detailLabel}>Unrizd P/L</Text>
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
  );
};

export default Instruments;
