import { renderHook } from '@testing-library/react-hooks';
import fetchMock from 'fetch-mock';
import useFetchStockNews from '../useFetchStockNews';

describe('useFetchStockNews', () => {
  it('should make the api call to fetch the default value and set it in the state', async () => {
    const FAKE_RAW_NEWS = {
      publishedAt: 'fake-news-date',
      title: 'fake-news-title',
      urlToImage: 'fake-news-img',
      url: 'fake-news-url',
    };
    const FAKE_NEWS = {
      datetime: 'fake-news-date',
      headline: 'fake-news-title',
      image: 'fake-news-img',
      url: 'fake-news-url',
    };
    fetchMock.mock(/.*/, {
      articles: [
        FAKE_RAW_NEWS,
        FAKE_RAW_NEWS,
      ],
    });
    const {
      result,
      waitForNextUpdate,
    } = renderHook(() => useFetchStockNews('AAPL', 1, 2));
    await waitForNextUpdate();
    expect(fetchMock.called()).toBe(true);
    const newsIdRemoved = result.current.news.map(({ id, ...rest }) => rest);
    expect(newsIdRemoved).toStrictEqual([FAKE_NEWS, FAKE_NEWS]);
    fetchMock.reset();
  });

  it('should parse array to string and make the api call to fetch the default value and set it in the state', async () => {
    const FAKE_RAW_NEWS = {
      publishedAt: 'fake-news-date',
      title: 'fake-news-title',
      urlToImage: 'fake-news-img',
      url: 'fake-news-url',
    };
    const FAKE_NEWS = {
      datetime: 'fake-news-date',
      headline: 'fake-news-title',
      image: 'fake-news-img',
      url: 'fake-news-url',
    };
    fetchMock.mock(/.*/, {
      articles: [
        FAKE_RAW_NEWS,
        FAKE_RAW_NEWS,
      ],
    });
    const {
      result,
      waitForNextUpdate,
    } = renderHook(() => useFetchStockNews(['AAPL', 'GOOL'], 1, 2));
    await waitForNextUpdate();
    expect(fetchMock.called()).toBe(true);
    const newsIdRemoved = result.current.news.map(({ id, ...rest }) => rest);
    expect(newsIdRemoved).toStrictEqual([FAKE_NEWS, FAKE_NEWS]);
    fetchMock.reset();
  });

  it('should make the api call to fetch and set error message on 404', async () => {
    fetchMock.mock(/.*/, 404);
    const {
      result,
      waitForNextUpdate,
    } = renderHook(() => useFetchStockNews('AAPL', 1, 2));
    await waitForNextUpdate();
    expect(fetchMock.called()).toBe(true);
    expect(result.current.error.message).toEqual('Cannot find any news about AAPL');
    fetchMock.reset();
  });

  it('should make the api call to fetch and set error message on 426', async () => {
    fetchMock.mock(/.*/, 426);
    const {
      result,
      waitForNextUpdate,
    } = renderHook(() => useFetchStockNews('AAPL', 1, 2));
    await waitForNextUpdate();
    expect(fetchMock.called()).toBe(true);
    expect(result.current.error.message).toEqual('No more news about AAPL, please come back later!');
    fetchMock.reset();
  });

  it('should make the api call to fetch and set error message on other errors', async () => {
    fetchMock.mock(/.*/, 500);
    const {
      result,
      waitForNextUpdate,
    } = renderHook(() => useFetchStockNews('AAPL', 1, 2));
    await waitForNextUpdate();
    expect(fetchMock.called()).toBe(true);
    expect(result.current.error.message).toEqual('Oops, there\'s something wrong with our app.');
    fetchMock.reset();
  });
});
