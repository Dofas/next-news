'use client';

import { useRouter } from 'next/navigation';

export default function ImageScreen({ imageUrl, imageAltText }) {
  const router = useRouter();

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${imageUrl}`} alt={imageAltText} />
        </div>
      </dialog>
    </>
  );
}
