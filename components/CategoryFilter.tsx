"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function CategoryFilter({
  categories,
}: {
  categories: string[];
}) {
  const router = useRouter();
  const params = useSearchParams();
  const current = params.get("category") || "";

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const cat = e.target.value;
    const sp = new URLSearchParams(params.toString());

    if (cat) {
      sp.set("category", cat);
    } else {
      sp.delete("category");
    }

    // reset pagination ke page 1 saat ganti kategori
    sp.delete("page");

    router.push(`/products?${sp.toString()}`);
  }

  return (
    <select
      className="select"
      value={current}
      onChange={onChange}
      aria-label="Filter by category"
    >
      <option value="">All categories</option>
      {categories.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
}
