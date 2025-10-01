"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
export default function ImageCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  function go(i: number) {
    const next = (i + images.length) % images.length;
    setIndex(next);
  }

  useEffect(() => {
    const id = setInterval(() => go(index + 1), 4000);
    return () => clearInterval(id);
  }, [index]); // autoplay sederhana

  return (
    <div className="carousel" role="region" aria-label="Product images">
      <div
        ref={trackRef}
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div className="carousel-slide" key={i}>
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              style={{ objectFit: "contain" }}
              priority={i === 0}
            />
          </div>
        ))}
      </div>
      <div className="carousel-dots" aria-hidden>
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
