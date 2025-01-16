import { getLatestNews } from '@/lib/news';
import NewsList from '@/components/news-list/NewsList';

export default function LatestNewsPage() {
  const latestNews = getLatestNews();

  return (
    <>
      <h2>Latest news</h2>
      <NewsList news={latestNews} />
    </>
  );
}
