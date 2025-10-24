import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../utils/CartContext"; 

export default function Header() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [q, setQ] = useState("");
  const { cartCount } = useCart(); 

  useEffect(() => {
    setQ(searchParams.get("q") || "");
  }, [searchParams]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (q.trim()) navigate(`/search?q=${encodeURIComponent(q.trim())}`);
  };

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        {/* LOGO */}
        <div className="brand" onClick={() => navigate("/")}>
          Walkzy Store
        </div>

        {/* THANH TÌM KIẾM */}
        <form className="search" onSubmit={onSubmit}>
          <input
            className="search-input"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Tìm sản phẩm..."
          />
          <button type="submit" className="search-btn">
            Tìm
          </button>
        </form>

        {/* ICON GIỎ HÀNG */}
        <div
          className="cart-area"
          onClick={() => navigate("/cart")}
          title="Xem giỏ hàng"
        >
          🛒
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </div>
      </div>
    </header>
  );
}
