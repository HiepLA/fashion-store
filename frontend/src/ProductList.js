import React from "react";
import ProductCard from "./components/ProductCard";

export default function ProductList({ products }) {
  if (!Array.isArray(products) || products.length === 0) {
    return <p className="muted">Không có sản phẩm nào để hiển thị.</p>;
  }

  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p._id} p={p} />
      ))}
    </div>
  );
}

