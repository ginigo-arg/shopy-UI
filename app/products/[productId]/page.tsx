export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <div>
      <h1>Product Page</h1>
      <p>Product ID: {params.productId}</p>
      {/* You can add more product details here */}
    </div>
  );
}
