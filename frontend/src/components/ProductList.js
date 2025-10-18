import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  if (!products.length)
    return <p className="muted">Không có sản phẩm nào để hiển thị.</p>;

  return (
    <div className="grid">
      {products.map((p) => (
        <div key={p._id} className="product-card">
          <Link to={`/product/${p._id}`}>
            <img
              src={p.image || "/placeholder.jpg"}
              alt={p.name}
              className="product-img"
            />
            <div className="product-info">
              <h3 className="product-title">{p.name}</h3>
              <p className="product-desc">{p.brand}</p>
              <p className="product-price">
                {Number(p.price).toLocaleString()} ₫
              </p>
              <button className="btn-add">Thêm vào giỏ hàng 🛒</button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
