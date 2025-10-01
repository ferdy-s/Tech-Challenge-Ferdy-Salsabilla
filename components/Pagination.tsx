"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination({
  total,
  perPage = 8,
}: {
  total: number;
  perPage?: number;
}) {
  const router = useRouter();
  const params = useSearchParams();
  const page = Math.max(1, Number(params.get("page") || 1));
  const pages = Math.max(1, Math.ceil(total / perPage));

  function go(to: number) {
    const sp = new URLSearchParams(params.toString());
    if (to <= 1) sp.delete("page");
    else sp.set("page", String(Math.min(Math.max(1, to), pages)));
    router.push(`/products?${sp.toString()}`);
  }

  // simple windowed pager
  const windowSize = 5;
  const start = Math.max(1, page - Math.floor(windowSize / 2));
  const end = Math.min(pages, start + windowSize - 1);
  const items = [];
  for (let i = start; i <= end; i++) items.push(i);

  return (
    <nav
      aria-label="Pagination"
      style={{
        display: "flex",
        gap: 8,
        justifyContent: "center",
        margin: "20px 0 40px",
      }}
    >
      <button
        className="button"
        onClick={() => go(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
      >
        ‹ Prev
      </button>
      {start > 1 && (
        <>
          <button className="button" onClick={() => go(1)}>
            1
          </button>
          <span style={{ alignSelf: "center", opacity: 0.6 }}>…</span>
        </>
      )}
      {items.map((n) => (
        <button
          key={n}
          className="button"
          aria-pressed={n === page}
          onClick={() => go(n)}
          aria-label={`Page ${n}`}
        >
          {n}
        </button>
      ))}
      {end < pages && (
        <>
          <span style={{ alignSelf: "center", opacity: 0.6 }}>…</span>
          <button className="button" onClick={() => go(pages)}>
            {pages}
          </button>
        </>
      )}
      <button
        className="button"
        onClick={() => go(page + 1)}
        disabled={page === pages}
        aria-label="Next page"
      >
        Next ›
      </button>
    </nav>
  );
}
