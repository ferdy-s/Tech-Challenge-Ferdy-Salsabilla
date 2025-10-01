"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SortControl() {
  const router = useRouter();
  const params = useSearchParams();
  const current = params.get("sort") || "price-asc";

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const sp = new URLSearchParams(params.toString());

    sp.set("sort", e.target.value);

    // reset pagination ke page 1 saat ganti sort
    sp.delete("page");

    router.push(`/products?${sp.toString()}`);
  }

  return (
    <select
      className="select"
      value={current}
      onChange={onChange}
      aria-label="Sort products"
    >
      <option value="price-asc">Price: Low → High</option>
      <option value="price-desc">Price: High → Low</option>
      <option value="title-asc">Title: A → Z</option>
      <option value="title-desc">Title: Z → A</option>
    </select>
  );
}
