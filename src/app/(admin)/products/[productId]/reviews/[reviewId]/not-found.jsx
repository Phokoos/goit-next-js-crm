'use client';

import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathName = usePathname();
  const productId = pathName.split('/')[2];
  const reviewId = pathName.split('/')[4];

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Review Not Found</h1>
      <p>
        Sorry, the review with ID <strong>{reviewId}</strong> for product{' '}
        <strong>{productId}</strong> does not exist.
      </p>
    </div>
  );
}
