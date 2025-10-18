import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../api";
import ProductList from "../ProductList";

function ProductPage() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts({ category: id, limit: 40 })
      .then((res) => setProducts(Array.isArray(res.data?.products) ? res.data.products : []))
      .catch(() => setProducts([]));
  }, [id]);

  return (
    <div className="container">
      <h1 className="section-title">Sản phẩm theo danh mục</h1>
      <ProductList products={products} />
    </div>
  );
}

export default ProductPage;

