import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import AvailabilityBadge from "./AvailabilityBadge";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`} className="card">
      <div
        style={{ position: "relative", width: "100%", aspectRatio: "16/10" }}
      >
        <Image
          src={product.thumbnail || product.images?.[0]}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: "cover" }}
          priority={false} // biarkan lazy untuk grid
        />
      </div>
      <div className="card-body">
        <div className="title">{product.title}</div>
        <div className="desc">{product.description}</div>
        <div className="price">${product.price.toFixed(2)}</div>
        <div style={{ marginTop: 8 }}>
          <AvailabilityBadge stock={product.stock} />
        </div>
      </div>
    </Link>
  );
}
