import "server-only";
import { Product, ProductsResponse } from "@/types/product";

const BASE = "https://dummyjson.com";
const REVALIDATE = 120; // ISR 2 menit

/**
 @param category 
  @param page 
 @param perPage 
 */
export async function fetchProducts(params?: {
  category?: string;
  page?: number;
  perPage?: number;
}): Promise<{ products: Product[]; total: number }> {
  const page = params?.page || 1;
  const perPage = params?.perPage || 8;
  const skip = (page - 1) * perPage;

  const url = params?.category
    ? `${BASE}/products/category/${encodeURIComponent(
        params.category
      )}?limit=${perPage}&skip=${skip}`
    : `${BASE}/products?limit=${perPage}&skip=${skip}`;

  const res = await fetch(url, {
    next: { revalidate: REVALIDATE },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = (await res.json()) as ProductsResponse;
  return { products: data.products, total: data.total };
}

export async function fetchCategories(): Promise<string[]> {
  const res = await fetch(`${BASE}/products/categories`, {
    next: { revalidate: REVALIDATE },
  });
  if (!res.ok) throw new Error("Failed to fetch categories");

  const cats = (await res.json()) as
    | { slug?: string; name?: string }[]
    | string[];
  return Array.isArray(cats)
    ? (cats as any[])
        .map((c) => (typeof c === "string" ? c : c.slug || c.name))
        .filter(Boolean)
    : [];
}

export async function fetchProduct(id: string | number): Promise<Product> {
  const res = await fetch(`${BASE}/products/${id}`, {
    next: { revalidate: REVALIDATE },
  });
  if (!res.ok) throw new Error("Failed to fetch product");

  return (await res.json()) as Product;
}
