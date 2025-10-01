"use client";
import React from "react";

export default function AvailabilityBadge({ stock }: { stock: number }) {
  const inStock = stock > 0;

  return (
    <span
      className={`badge ${inStock ? "in" : "out"}`}
      role="status"
      aria-label={
        inStock ? "Product available in stock" : "Product out of stock"
      }
    >
      <span aria-hidden="true">●</span>
      {inStock ? "In Stock" : "Out of Stock"}
    </span>
  );
}
