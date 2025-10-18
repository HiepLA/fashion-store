import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../api";
import ProductList from "../ProductList";

function SearchPage() {
  const [params] = useSearchParams();
  const keyword = params.get("q") || "";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts({ keyword, limit: 40 })
      .then((res) => setProducts(Array.isArray(res.data?.products) ? res.data.products : []))
      .catch(() => setProducts([]));
  }, [keyword]);

  return (
    <div className="container">
      <h2 className="section-subtitle">
        Kết quả tìm kiếm cho: <span style={{ fontWeight: 800 }}>{keyword}</span>
      </h2>
      <ProductList products={products} />
    </div>
  );
}

export default SearchPage;

