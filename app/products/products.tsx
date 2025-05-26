import { getProducts } from "./actions/get-products";
import Product from "./product";
export default async function Products() {
  const products = await getProducts();
  return (
    <>
      <div className="flex flex-col py-4 gap-4">
        <h1 className="text-3xl font-bold">Products</h1>
        <p>List of products available in the store.</p>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
