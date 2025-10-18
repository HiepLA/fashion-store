import React, { useEffect, useState } from "react";
import { getProducts, getCategories } from "../api";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";

function HomePage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCategories()
      .then((res) => {
        const data = Array.isArray(res.data)
          ? res.data
          : Array.isArray(res.data?.data)
          ? res.data.data
          : [];
        setCategories(data);
      })
      .catch(() => setCategories([]));

    getProducts({ limit: 20 })
      .then((res) => {
        const data = Array.isArray(res.data?.products) ? res.data.products : [];
        setProducts(data);
      })
      .catch(() => setProducts([]));
  }, []);

  return (
    <div>
      <section className="hero">
        <h1 className="hero-title">Walkzy Store</h1>
        <p className="hero-subtitle">🛍️ Phong cách thời trang, chất lượng vượt trội</p>
        <a href="#products" className="btn btn-light">Khám phá ngay</a>
      </section>

      <section className="container" id="categories">
        <h2 className="section-title">
          <span role="img" aria-label="tag">🏷️</span> Danh mục sản phẩm
        </h2>
        <CategoryList categories={categories} />
      </section>

      <section className="container" id="products">
        <h2 className="section-subtitle">👕 Tất cả sản phẩm</h2>
        <ProductList products={products} />
      </section>
    </div>
  );
}

export default HomePage;
