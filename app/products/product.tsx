import Image from "next/image";
import type { Product } from "./interfaces/product-interface";
import { API_URL } from "../common/constants/api";
import Link from "next/link";
import { getProductImage } from "./getProductImage";

interface ProductProps {
  product: Product;
}

export default function Product({ product }: ProductProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="hover:shadow-lg transition-shadow duration-300"
      style={{ textDecoration: "none" }}
      title={product.name}
      aria-label={`View details for ${product.name}`}
    >
      <div className="rounded-lg border p-4 shadow-md flex flex-col gap-4 bg-white ">
        {product.imageExists && (
          <Image
            src={getProductImage(+product.id)}
            alt="Picture of product"
            width={100}
            height={100}
            className="w-full h-auto object-cover rounded-lg"
          ></Image>
        )}
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
        </h2>
        <span
          className="text-gray-600 text-sm overflow-hidden text-ellipsis whitespace-nowrap"
          style={{
            maxWidth: "100%",
            maxHeight: "2.5em",
            minHeight: "2.5em",
            display: "block",
            lineHeight: "1.25em",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "normal",
            wordBreak: "break-word",
          }}
          title={
            product.description.length > 50 ? product.description : undefined
          }
        >
          {product.description.length > 50
            ? product.description.slice(0, 50) + "..."
            : product.description}
        </span>
        <p className="text-base font-medium text-green-700">
          Price: ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
