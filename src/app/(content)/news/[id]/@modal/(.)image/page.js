import { notFound } from 'next/navigation';
import ModalBackdrop from '@/components/image-screen/ModalBackdrop';
import { getNewsItem } from '@/lib/news';

export default async function InterceptedImagePage({ params }) {
  const { id: newsItemId } = await params;
  const newsItem = await getNewsItem(newsItemId);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
