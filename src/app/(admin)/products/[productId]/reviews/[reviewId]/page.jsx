import { notFound } from 'next/navigation';

export const generateMetadata = async ({ params }) => {
  const id = (await params).productId;
  return {
    title: `Product ${id} reviews`,
  }
};

export default async function Review({ params }) {
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) >= 1000) {
    notFound();
  }

  return (
    <div>
      <h2>Product Page - {productId}</h2>
      <h3>Review Page - {reviewId}</h3>
    </div>
  );
}
