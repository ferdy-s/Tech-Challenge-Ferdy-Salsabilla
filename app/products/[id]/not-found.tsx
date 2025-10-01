import Link from "next/link";

export default function NotFound() {
  return (
    <div className="card" style={{ padding: 24 }}>
      <h2 style={{ marginTop: 0 }}>Product not found</h2>
      <p>The product you’re looking for does not exist.</p>
      <Link href="/products" className="topnav-link">
        ← Back to Products
      </Link>
    </div>
  );
}
