import React from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  TouchableHighlight,
  ViewPropTypes,
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import PropTypes from 'prop-types';
import useFetchStockNews from './useFetchStockNews';
import styles from '../styles';
import Card from '../Card';
import ErrorMessage from '../ErrorMessage';
import NewsMappedList from './NewsMappedList';
import CardFooter from '../CardFooter';
import Row from '../Row';

const NewsCard = ({ query, style }) => {
  const { news, isLoading, error } = useFetchStockNews(query, 1, 2);
  const navigator = useNavigation();
  return (
    <Card title="News" style={style}>
      {!error ? (
        <>
          {isLoading && <ActivityIndicator size="large" />}
          {!isLoading && news && (
            <NewsMappedList news={news} />
          )}
          <CardFooter>
            <TouchableHighlight
              style={styles.cardFooterButton}
              onPress={() => navigator.navigate('NewsList', { query })}
              underlayColor="#eee"
            >
              <Text style={styles.cardFooterButtonText}>View more</Text>
            </TouchableHighlight>
          </CardFooter>
        </>
      ) : <ErrorMessage message={error.message} />}
    </Card>
  );
};

NewsCard.propTypes = {
  query: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  style: ViewPropTypes.style,
};

NewsCard.defaultProps = {
  style: null,
};

export default NewsCard;
