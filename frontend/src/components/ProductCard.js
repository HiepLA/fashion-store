import { useNavigate } from "react-router-dom";

export default function ProductCard({ p }) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/product/${p._id}`)}>
      <img
        className="img-cover"
        src={p.image?.startsWith("http") ? p.image : "https://via.placeholder.com/400x300?text=No+Image"}
        alt={p.name}
        onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/400x300?text=No+Image")}
      />
      <div className="card-body">
        <div style={{ fontWeight: 700, marginBottom: 4 }}>{p.name}</div>
        <div className="muted" style={{ marginBottom: 8 }}>{p.brand}</div>
        <div className="price">{Number(p.price).toLocaleString()} ₫</div>
      </div>
    </div>
  );
}

