import type { Product } from "../types/product";

const baseUrl = "https://fakestoreapi.com";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${baseUrl}/products`);

  if (!response.ok) {
    throw new Error("Erro ao obter produtos");
  }

  return response.json();
}
