"use client";
import React from "react";

export default function AvailabilityBadge({ stock }: { stock: number }) {
  const inStock = stock > 0;
  return (
    <span className={`badge ${inStock ? "in" : "out"}`}>
      <span aria-hidden>●</span>
      {inStock ? "In Stock" : "Out of Stock"}
    </span>
  );
}
