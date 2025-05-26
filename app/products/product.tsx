import type { Product } from "./interfaces/product-interface";

interface ProductProps {
  product: Product;
}

export default function Product({ product }: ProductProps) {
  return (
    <div className="rounded-lg border p-4 shadow-md flex flex-col gap-4">
      <h2>{product.name.charAt(0).toUpperCase() + product.name.slice(1)}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
    </div>
  );
}
