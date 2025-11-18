export default async function Product({params}) {
  const {productId} = await params;

  return (
    <div>
      <h2>Product Page - {productId}</h2>
    </div>
  );
}
