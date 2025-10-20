import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCart } from "../utils/cartUtils";

export default function Header() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [q, setQ] = useState("");
  const [cartCount, setCartCount] = useState(0);

  // giữ keyword trên URL
  useEffect(() => setQ(searchParams.get("q") || ""), [searchParams]);

  // cập nhật badge
  useEffect(() => {
    const updateCartCount = () => {
      const total = getCart().reduce((s, it) => s + (it.quantity || 1), 0);
      setCartCount(total);
    };
    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);
    window.addEventListener("storage", updateCartCount);
    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(q.trim())}`);
  };

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <div className="brand" onClick={() => navigate("/")}>Walkzy <span style={{color:"#2563eb"}}>Store</span></div>

        <form className="search" onSubmit={onSubmit}>
          <input className="search-input" value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Tìm sản phẩm..." />
          <button type="submit" className="search-btn">Tìm</button>
        </form>

        <div className="cart-area" onClick={() => navigate("/cart")}>
          🛒 {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
      </div>
    </header>
  );
}
