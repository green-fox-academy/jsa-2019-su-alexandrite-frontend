import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { API_KEY, API_URL } from 'react-native-dotenv';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesome5 } from '@expo/vector-icons';
import Popup from '../common/Popup';
import styles from './styles';
import TransactionSelector from './TransactionSelector';
import purchaseStock, { purchaseStockReset } from '../redux/order/actionCreator';
import FAB from '../common/FAB';
import ErrorMessage from '../common/ErrorMessage';
import Column from '../common/Column';
import Row from '../common/Row';
import { moneyAmount2String } from '../common/numbers';

const fetchStockPrice = async (symbol) => {
  const url = new URL(`${API_URL}/stock/${symbol}/price`);
  url.searchParams.append('token', API_KEY);
  const response = await fetch(url);
  if (!response.ok) {
    switch (response.status) {
      case 401:
        throw Error(`The stock ${symbol} you are searching for does not exist`);
      default:
        throw Error('Oop! there is something wrong with our app');
    }
  }
  return response.json();
};

const useStockPrice = (symbol) => {
  const [price, setPrice] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    const fetchData = async () => {
      try {
        const result = await fetchStockPrice(symbol);
        setPrice(result);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return {
    price, error, isLoading,
  };
};

const TransactionPopup = ({ symbol }) => {
  const [popupVisible, setModalVisible] = useState(false);
  const [shares, setShares] = useState(0);
  const [transactionBehavior, setTransactionBehavior] = useState('sell');
  const { accessToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const {
    isLoading,
    error,
    isSettled,
  } = useSelector((state) => state.orders);

  const {
    price,
    isLoading: isLoadingPrice,
  } = useStockPrice(symbol);

  useEffect(() => {
    if (isSettled) {
      setTimeout(() => {
        setModalVisible(false);
        setShares();
        dispatch(purchaseStockReset());
      }, 1000);
    }
  }, [isSettled]);

  const onCloseAddModal = () => {
    setModalVisible(false);
    setShares();
  };

  const onConfirmAddModal = () => {
    const share = parseInt(shares, 10);
    if (shares) {
      dispatch(purchaseStock(symbol, share, transactionBehavior, accessToken));
    }
  };

  return (
    <View>
      <Popup
        visible={popupVisible}
        onCancel={onCloseAddModal}
        onConfirm={onConfirmAddModal}
        title={`Purchase ${symbol}`}
        confirmButtonText="OK"
        confirmDisabled={!shares || isSettled}
      >
        {isSettled
          ? (
            <Column style={{ justifyContent: 'center', alignItems: 'center' }} flex={1}>
              <FontAwesome5 name="check-circle" solid color="green" size={64} />
              <Text style={{ padding: 8, fontWeight: 'bold' }}>Success!</Text>
            </Column>
          ) : (
            <Column flex={1}>
              <Row style={{ justifyContent: 'center', paddingBottom: 15 }}>
                {isLoadingPrice ? <ActivityIndicator /> : <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{`${moneyAmount2String(price)}*`}</Text>}
              </Row>
              <TransactionSelector
                selected={transactionBehavior}
                onSelect={setTransactionBehavior}
              />
              <Row style={{ marginTop: 15 }}>
                <View
                  style={{
                    borderBottomColor: '#333',
                    borderBottomWidth: 2,
                    padding: 8,
                    flexDirection: 'row',
                    flex: 1,
                  }}
                >
                  <TextInput style={styles.sharesField} placeholder="Shares" onChangeText={(text) => setShares(text)} />
                  {isLoading && <ActivityIndicator style={styles.loading} />}
                </View>
              </Row>
              <Text style={{ fontSize: 12, color: '#999', marginTop: 5 }}>{'* Only refers to current price.\nPrice might fluctuate based on purchase time'}</Text>
              {error && <ErrorMessage message={error.message} />}
            </Column>
          )}

      </Popup>
      <FAB
        onPress={() => setModalVisible(true)}
        iconName="exchange-alt"
      />
    </View>
  );
};

TransactionPopup.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default TransactionPopup;
