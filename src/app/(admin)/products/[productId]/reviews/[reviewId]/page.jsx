import { notFound, redirect } from 'next/navigation';

export const generateMetadata = async ({ params }) => {
  const id = (await params).productId;
  return {
    title: `Product ${id} reviews`,
  };
};

const getRandomInt = (count) => {
  return Math.floor(Math.random() * count);
};

export default async function Review({ params }) {
  const random = getRandomInt(10);
  if (random === 1) {
    throw new Error('Product not found.');
  }

  const { productId, reviewId } = await params;

  if (parseInt(reviewId) >= 1000) {
    // notFound()
    redirect('/products');
  }

  return (
    <div>
      <h2>Product Page - {productId}</h2>
      <h3>Review Page - {reviewId}</h3>
    </div>
  );
}
