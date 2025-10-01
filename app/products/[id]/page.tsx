import { fetchProduct } from "@/lib/api";
import ImageCarousel from "@/components/ImageCarousel";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: { id: string } };

export const revalidate = 120;

export async function generateMetadata({ params }: Props) {
  try {
    const p = await fetchProduct(params.id);
    return {
      title: `${p.title} – Product`,
      description: p.description,
    };
  } catch {
    return {
      title: "Product not found",
      description: "The requested product could not be found.",
    };
  }
}

export default async function ProductDetail({ params }: Props) {
  let product;
  try {
    product = await fetchProduct(params.id);
  } catch {
    notFound();
  }

  if (!product) notFound();

  return (
    <main>
      <div style={{ marginBottom: 14 }}>
        <Link href="/products" className="topnav-link">
          ← Back to Products
        </Link>
      </div>

      {/* two-column on desktop, stack on mobile (see .detail-grid in globals.css) */}
      <div className="detail-grid">
        <section>
          <ImageCarousel
            images={
              product.images?.length ? product.images : [product.thumbnail]
            }
            alt={product.title}
          />
        </section>

        <section className="card" style={{ padding: 20 }}>
          <h1 className="page-title" style={{ fontSize: 24, marginTop: 0 }}>
            {product.title}
          </h1>

          <div style={{ marginTop: 6 }}>
            <AvailabilityBadge stock={product.stock} />
          </div>

          <div className="price" style={{ fontSize: 26, marginTop: 12 }}>
            ${product.price.toFixed(2)}
          </div>

          <p className="desc" style={{ height: "auto", marginTop: 12 }}>
            {product.description}
          </p>

          <div className="spec">
            <div>
              <span>Category</span>
              <b>{product.category}</b>
            </div>
            {product.brand && (
              <div>
                <span>Brand</span>
                <b>{product.brand}</b>
              </div>
            )}
            {typeof product.rating === "number" && (
              <div>
                <span>Rating</span>
                <b>{product.rating}</b>
              </div>
            )}
            {typeof product.discountPercentage === "number" && (
              <div>
                <span>Discount</span>
                <b>{product.discountPercentage}%</b>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
