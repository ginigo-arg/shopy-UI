"use server";
import { post } from "@/app/common/util/fetch";

export async function checkout(productId: number) {
  return post("checkout/session", {
    productId: productId,
  });
}
