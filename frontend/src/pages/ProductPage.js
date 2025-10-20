import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../api";
import ProductList from "../ProductList";


function ProductPage() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!id) return;
    getProducts({ category: id })
      .then((res) => {
        console.log("📦 Products by category:", res.data);
        const data = Array.isArray(res.data?.products)
          ? res.data.products
          : [];
        setProducts(data);
      })
      .catch((err) => {
        console.error("❌ Lỗi tải sản phẩm theo danh mục:", err);
        setProducts([]);
      });
  }, [id]);

  return (
    <div className="container">
      <h1 className="section-title">Sản phẩm theo danh mục</h1>
      <ProductList products={products} />
    </div>
  );
}

export default ProductPage;
