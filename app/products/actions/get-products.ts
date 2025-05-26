"use server";

import { get } from "@/app/common/util/fetch";
import { Product } from "../interfaces/product-interface";

export async function getProducts() {
  return get<Product[]>("products");
}
