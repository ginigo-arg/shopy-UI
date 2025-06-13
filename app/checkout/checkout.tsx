"use client";

import { checkout } from "./actions/checkout";
import getStripe from "./stripe";

interface CheckoutProps {
  productId: number;
}

export default function Checkout({ productId }: CheckoutProps) {
  const handleCheckout = async () => {
    console.log("Hola");
    const session = await checkout(productId);
    console.log("session", session);
    const stripe = await getStripe();
    console.log("stripe", stripe);
    await stripe?.redirectToCheckout({ sessionId: session.data.id });
    console.log("redirect");
  };

  return (
    <button
      className="bg-blue-50 font-bold text-gray-700 px-4 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
      onClick={handleCheckout}
    >
      Buy Now
    </button>
  );
}
