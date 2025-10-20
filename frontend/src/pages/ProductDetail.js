import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api";
import { addToCart } from "../utils/cartUtils";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then((res) => setProduct(res.data))
      .catch(() => setProduct(null));
  }, [id]);

  if (!product) return <div className="container">Đang tải sản phẩm...</div>;

  return (
    <div className="container">
      <div className="product-detail">
        <div>
          <img
            src={product.image || "/placeholder.jpg"}
            alt={product.name}
            className="product-img"
          />
        </div>

        <div>
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price">{Number(product.price).toLocaleString()} ₫</p>
          <p className="product-desc">{product.description}</p>
          <p className="muted" style={{ marginBottom: 16 }}>
            Còn lại: {product.stock}
          </p>

          <button
            className="btn btn-primary"
            onClick={() => {
              addToCart(product);              
              alert("✅ Đã thêm vào giỏ hàng!"); 
             
            }}
          >
            Thêm vào giỏ hàng 🛒
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
