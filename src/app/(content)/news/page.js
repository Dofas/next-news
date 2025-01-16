import NewsList from '@/components/news-list/NewsList';
import { DUMMY_NEWS } from '@/dummy-news';

const Page = () => {
  return (
    <main>
      <h2>News Page</h2>
      <NewsList news={DUMMY_NEWS} />
    </main>
  );
};

export default Page;
