// 'use client';

import NewsList from '@/components/news-list/NewsList';
import { getAllNews } from '@/lib/news';
// import { useEffect, useState } from 'react';

export default async function Page() {
  const news = await getAllNews();
  // const newsResponse = await fetch('http://localhost:8080/news');
  // const fetchedNews = await newsResponse.json();

  // if (!newsResponse.ok) {
  //   throw new Error('Failed to fetch news');
  // }

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [news, setNews] = useState([]);
  //
  // useEffect(() => {
  //   async function fetchNews() {
  //     setIsLoading(true);
  //     const newsResponse = await fetch('http://localhost:8080/news');
  //     if (!newsResponse.ok) {
  //       setError('Failed to fetch news');
  //       setIsLoading(false);
  //       setNews([]);
  //       return;
  //     }
  //
  //     const fetchedNews = await newsResponse.json();
  //     setIsLoading(false);
  //     setError('');
  //     setNews(fetchedNews);
  //   }
  //   fetchNews();
  // }, []);
  //
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  //
  // if (error) {
  //   return <p>Error: {error}</p>;
  // }

  // let newsContent;

  // if (fetchedNews.length > 0) {
  //   newsContent = <NewsList news={news} />;
  // }

  return (
    <main>
      <h2>News Page</h2>
      {/*{newsContent}*/}
      {/*<NewsList news={fetchedNews} />*/}
      <NewsList news={news} />
    </main>
  );
}
