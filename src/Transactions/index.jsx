import React, { useEffect } from 'react';
import {
  FlatList, View,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserTransactions } from '../redux/account/actionCreator';
import TransactionItem from './TransactionItem';
import ErrorMessage from '../common/ErrorMessage';

const Transactions = () => {
  const {
    transactions,
    transactionsError,
    isLoadingTransactions,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserTransactions());
  }, []);

  return (
    transactionsError
      ? <ErrorMessage message={transactionsError.message} />
      : (
        <FlatList
          contentContainerStyle={{ flexDirection: 'column', paddingHorizontal: 15 }}
          data={transactions}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#eee' }} />}
          refreshing={isLoadingTransactions}
          onRefresh={() => dispatch(fetchUserTransactions())}
          renderItem={({ item }) => (
            <TransactionItem item={item} />
          )}
        />
      )
  );
};

export default Transactions;
