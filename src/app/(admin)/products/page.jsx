import Link from 'next/link';

export default function ProductsList() {
  return (
    <div>
      <h2 className={'mb-2'}>Products</h2>
      <div className={'flex flex-col'}>
        <Link href={'/products/1'}>Product 1</Link>
        <Link href={'/products/2'}>Product 2</Link>
        <Link href={'/products/3'} replace>Product 3</Link>
        <Link href={'/products/4'}>Product 4</Link>
      </div>
    </div>
  );
}
