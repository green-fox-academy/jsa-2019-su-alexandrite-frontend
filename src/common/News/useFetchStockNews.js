import { useEffect, useState } from 'react';
import {
  NEWS_API_URL,
  NEWS_API_KEY,
} from 'react-native-dotenv';

const fetchNews = async (query, page, pageSize) => {
  const newsUrl = new URL(`${NEWS_API_URL}/everything`);
  const parsedQuery = (typeof query.join) === 'function'
    ? query.join(' OR ')
    : query;
  newsUrl.searchParams.append('apiKey', NEWS_API_KEY);
  newsUrl.searchParams.append('q', parsedQuery);
  newsUrl.searchParams.append('pageSize', pageSize);
  newsUrl.searchParams.append('page', page);
  newsUrl.searchParams.append('sortBy', 'publishedAt');
  newsUrl.searchParams.append('language', 'en');
  const res = await fetch(newsUrl);
  if (!res.ok) {
    switch (res.status) {
      case 404:
        throw new Error(`Cannot find any news about ${query}`);
      case 426:
        throw new Error(`No more news about ${query}, please come back later!`);
      default:
        throw new Error('Oops, there\'s something wrong with our app.');
    }
  }
  const json = await res.json();
  return json.articles.map(({
    publishedAt, title, urlToImage, url,
  }) => ({
    datetime: publishedAt,
    headline: title,
    image: urlToImage,
    url,
    id: (new Date() * Math.random()).toString(),
  }));
};

export default (query, page = 1, pageSize = 20) => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const result = await fetchNews(query, page, pageSize);
        setNews(page === 1 ? result : [...news, ...result]);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page]);
  return {
    news, error, isLoading,
  };
};
