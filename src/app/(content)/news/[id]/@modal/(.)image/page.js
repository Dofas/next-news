import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';
import ImageScreen from '@/components/image-screen/ImageScreen';

export default async function InterceptedImagePage({ params }) {
  const { id: newsItemId } = await params;
  const newsItem = DUMMY_NEWS.find((newItem) => newItem.slug === newsItemId);

  if (!newsItem) {
    notFound();
  }

  return (
    <ImageScreen imageUrl={newsItem.image} imageAltText={newsItem.title} />
  );
}
