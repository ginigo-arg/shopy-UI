import Image from "next/image";
import getProduct from "./get-product";
import { API_URL } from "@/app/common/constants/api";
import { useState } from "react";

interface SingleProductProps {
  params: {
    productId: string;
  };
}

export default async function SingleProductPage({
  params,
}: SingleProductProps) {
  const product = await getProduct(+params.productId);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "80vh",
        background: "#fafbfc",
        padding: "40px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "48px",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          padding: "32px",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <Image
            src={`${API_URL}/images/products/${product.id}.jpg`}
            alt={product.name}
            style={{
              width: "100%",
              borderRadius: "8px",
              objectFit: "cover",
              border: "1px solid #e5e7eb",
            }}
            width={400}
            height={400}
            priority
          />
        </div>
        <div
          style={{
            flex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: "2.2rem",
              fontWeight: 700,
              marginBottom: "18px",
            }}
          >
            {product.name}
          </h1>
          <p
            style={{
              color: "#6b7280",
              fontSize: "1.1rem",
              marginBottom: "18px",
            }}
          >
            {product.description}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                fontWeight: 700,
                fontSize: "2rem",
                color: "#111827",
                marginRight: "18px",
              }}
            >
              ${product.price?.toFixed(2)}
            </span>
            <span
              style={{
                color: "#10b981",
                fontWeight: 500,
                fontSize: "1rem",
              }}
            >
              In Stock
            </span>
          </div>
          <form
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "32px",
            }}
            // onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="quantity" style={{ fontWeight: 500 }}>
              Qty:
            </label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              min={1}
              max={10}
              defaultValue={1}
              style={{
                width: 60,
                padding: "6px 8px",
                border: "1px solid #d1d5db",
                borderRadius: 4,
              }}
            />
            <button
              type="submit"
              style={{
                background: "#2563eb",
                color: "#fff",
                fontWeight: 600,
                fontSize: "1rem",
                padding: "10px 28px",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              Add to Cart
            </button>
          </form>
          <div style={{ color: "#9ca3af", fontSize: "0.95rem" }}>
            Product ID: {product.id}
          </div>
        </div>
      </div>
    </div>
  );
}
