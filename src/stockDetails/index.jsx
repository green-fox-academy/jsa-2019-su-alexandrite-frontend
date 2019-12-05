import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import commonStyles from '../common/styles';
import { fetchStockDetails } from '../redux/stock/actionCreator';
import Card from '../common/Card';
import style from './style';
import Column from '../common/Column';
import { decimal2Percentage, processLargeNumbers } from '../common/numbers';

const detailsRow = (key, val) => (
  <View style={style.detailsContentRow}>
    <Text style={style.detailsContentKey}>{`${key}:`}</Text>
    <Text style={style.detailsContentVal}>{`${val}`}</Text>
  </View>
);

const stockDetails = () => {
  const symbol = useNavigationParam('symbol') || 'MSFT';
  // const navigation = useNavigation();
  const dispatch = useDispatch();

  const { details } = useSelector((state) => state.stock);

  useEffect(() => {
    dispatch(fetchStockDetails(symbol));
  }, []);

  return (
    <ScrollView style={commonStyles.container}>
      <Card title="Details">
        <View style={style.detailsContentContainer}>
          <Column>
            {detailsRow('52 WK Low', details.week52low)}
            {detailsRow('52 WK High', details.week52high)}
            {detailsRow('P/E', details.peRatio)}
            {detailsRow('EPS', details.ttmEPS)}
            {detailsRow('DIV. Yield', `${decimal2Percentage(details.dividendYield)}%`)}
            {detailsRow('Payout Ratio', 'N/A')}
            {detailsRow('Div...Date', details.nextDividendDate)}
          </Column>
          <Column style={{ marginLeft: 25 }}>
            {detailsRow('Total Cash', processLargeNumbers(details.totalCash))}
            {detailsRow('Total Cash/Share', 'N/A')}
            {detailsRow('Total Debt', processLargeNumbers(details.currentDebt))}
            {detailsRow('Operating Cash F', 'N/A')}
            {detailsRow('Free Cash F', 'N/A')}
            {detailsRow('Revenue', processLargeNumbers(details.revenue))}
            {detailsRow('Rev/Share', details.revenuePerShare)}
            {detailsRow('EBITDA', processLargeNumbers(details.EBITDA))}
          </Column>
        </View>
      </Card>
    </ScrollView>
  );
};

stockDetails.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('symbol'),
});

export default stockDetails;
