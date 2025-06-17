"use client";

import { useEffect } from "react";
import { Product as IProduct } from "./interfaces/product-interface";
import Product from "./product";
import { io } from "socket.io-client";
import { API_URL } from "../common/constants/api";
import revalidateProducts from "./actions/revalidate-products";
interface ProductGridProps {
  products: IProduct[];
}

export default function ProductsGrid({ products }: ProductGridProps) {
  useEffect(() => {
    const socket = io(API_URL!);

    socket.on("productUpdated", () => {
      revalidateProducts();
    });

    return () => {
      socket?.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col py-4 gap-4">
      <h1 className="text-3xl font-bold">Products</h1>
      <p>List of products available in the store.</p>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
