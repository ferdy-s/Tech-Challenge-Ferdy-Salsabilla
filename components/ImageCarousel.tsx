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
  const startX = useRef(0);
  const deltaX = useRef(0);

  function go(i: number) {
    const next = (i + images.length) % images.length;
    setIndex(next);
  }

  // autoplay
  useEffect(() => {
    const id = setInterval(() => go(index + 1), 5000);
    return () => clearInterval(id);
  }, [index, images.length]);

  // swipe gesture
  function handleTouchStart(e: React.TouchEvent) {
    startX.current = e.touches[0].clientX;
  }

  function handleTouchMove(e: React.TouchEvent) {
    deltaX.current = e.touches[0].clientX - startX.current;
  }

  function handleTouchEnd() {
    if (Math.abs(deltaX.current) > 50) {
      if (deltaX.current > 0) go(index - 1);
      else go(index + 1);
    }
    deltaX.current = 0;
  }

  return (
    <div
      className="carousel"
      role="region"
      aria-label="Product images"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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
