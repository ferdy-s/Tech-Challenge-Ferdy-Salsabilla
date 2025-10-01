import { fetchProduct } from "@/lib/api";
import ImageCarousel from "@/components/ImageCarousel";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import Link from "next/link";

type Props = { params: { id: string } };

export const revalidate = 120;

export async function generateMetadata({ params }: Props) {
  const p = await fetchProduct(params.id);
  return {
    title: `${p.title} – Product`,
    description: p.description,
  };
}

export default async function ProductDetail({ params }: Props) {
  const product = await fetchProduct(params.id);

  return (
    <main>
      <p style={{ marginBottom: 12 }}>
        <Link href="/products">← Back to products</Link>
      </p>

      <div
        style={{
          display: "grid",
          gap: 20,
          gridTemplateColumns: "minmax(0,1fr)",
        }}
      >
        <ImageCarousel
          images={product.images?.length ? product.images : [product.thumbnail]}
          alt={product.title}
        />

        <section className="card" style={{ padding: 18 }}>
          <h1 className="title" style={{ fontSize: 22 }}>
            {product.title}
          </h1>
          <div style={{ marginTop: 6 }}>
            <AvailabilityBadge stock={product.stock} />
          </div>
          <div className="price" style={{ fontSize: 24, marginTop: 10 }}>
            ${product.price.toFixed(2)}
          </div>
          <p className="desc" style={{ height: "auto", marginTop: 12 }}>
            {product.description}
          </p>
          <div style={{ marginTop: 10, color: "#8b94a7", fontSize: 14 }}>
            <div>
              Category: <b>{product.category}</b>
            </div>
            {product.brand && (
              <div>
                Brand: <b>{product.brand}</b>
              </div>
            )}
            {typeof product.rating === "number" && (
              <div>
                Rating: <b>{product.rating}</b>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
