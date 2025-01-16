import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';

export default async function ImagePage({ params }) {
  const { id: newsItemId } = await params;
  const newsItem = DUMMY_NEWS.find((newItem) => newItem.slug === newsItemId);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
