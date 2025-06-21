import { getProducts } from "./actions/get-products";
import ProductsGrid from "./products-grid";
export default async function Products() {
  try {
    const products = await getProducts();
    return <ProductsGrid products={products} />;
  } catch (error) {
    return <div>Error: {String(error)}</div>;
  }
}
