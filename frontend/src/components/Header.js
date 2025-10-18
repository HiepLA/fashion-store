import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [q, setQ] = useState("");

  useEffect(() => {
    setQ(searchParams.get("q") || "");
  }, [searchParams]);

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(q.trim())}`);
  };

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <div className="brand" onClick={() => navigate("/")}>Walkzy Store</div>
        <form className="search" onSubmit={onSubmit}>
          <input
            className="search-input"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Tìm sản phẩm..."
          />
          <button type="submit" className="search-btn">Tìm</button>
        </form>
      </div>
    </header>
  );
}

