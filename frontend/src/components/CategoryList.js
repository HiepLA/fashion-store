import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../api";

export default function CategoryList({ categories: categoriesProp }) {
  const [categories, setCategories] = useState(categoriesProp || []);

  useEffect(() => {
    if (categoriesProp && categoriesProp.length) return;
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
  }, [categoriesProp]);

  if (!categories?.length) return <p className="muted">Chưa có danh mục nào.</p>;

  return (
    <div className="chip-list">
      {categories.map((c) => (
        <Link key={c._id} to={`/category/${c._id}`} className="chip">
          {c.name}
        </Link>
      ))}
    </div>
  );
}

