import { fetchCategories, fetchProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import SortControl from "@/components/SortControl";
import Pagination from "@/components/Pagination";

export const revalidate = 120;

type Props = {
  searchParams?: { category?: string; sort?: string; page?: string };
};

const PER_PAGE = 8;

function sortProducts<T extends { price: number; title: string }>(
  list: T[],
  sort?: string
) {
  const s = sort || "price-asc";
  const arr = [...list];
  if (s === "price-asc") arr.sort((a, b) => a.price - b.price);
  else if (s === "price-desc") arr.sort((a, b) => b.price - a.price);
  else if (s === "title-asc")
    arr.sort((a, b) => a.title.localeCompare(b.title));
  else if (s === "title-desc")
    arr.sort((a, b) => b.title.localeCompare(a.title));
  return arr;
}

export default async function ProductsPage({ searchParams }: Props) {
  const category = searchParams?.category || undefined;
  const sort = searchParams?.sort || undefined;
  const page = Math.max(1, Number(searchParams?.page || 1));

  const [{ products: raw, total }, categories] = await Promise.all([
    fetchProducts({ category, page, perPage: PER_PAGE }),
    fetchCategories(),
  ]);
  const products = sortProducts(raw, sort);

  return (
    <main>
      <div className="title-row">
        <h1 className="page-title">Products</h1>
      </div>

      <div className="toolbar">
        <CategoryFilter categories={categories} />
        <SortControl />
      </div>

      <section className="grid" aria-live="polite">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>

      <Pagination total={total} perPage={PER_PAGE} />
    </main>
  );
}
