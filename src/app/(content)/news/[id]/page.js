import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const Page = async ({ params }) => {
  const { id: newsId } = await params;
  const newsItem = DUMMY_NEWS.find((newItem) => newItem.slug === newsId);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
};

export default Page;
