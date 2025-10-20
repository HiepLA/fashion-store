import React, { useEffect, useState } from "react";
import {
  getCart,
  updateQuantity,
  removeFromCart,
  clearCart,
} from "../utils/cartUtils";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleQuantityChange = (id, qty) => {
    const newQty = Math.max(1, qty);
    updateQuantity(id, newQty);
    setCart(getCart());
  };

  const handleRemove = (id) => {
    removeFromCart(id);
    setCart(getCart());
  };

  const handleClear = () => {
    clearCart();
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0)
    return (
      <div className="container text-center py-20">
        <h2 className="text-2xl font-bold">🛒 Giỏ hàng trống</h2>
        <p className="text-gray-500 mt-2">Hãy thêm sản phẩm vào giỏ nhé!</p>
        <button
          onClick={() => navigate("/")}
          className="btn btn-light mt-4"
        >
          ⬅️ Tiếp tục mua hàng
        </button>
      </div>
    );

  return (
    <div className="container py-10">
      <h1 className="section-title mb-10">🛍️ Giỏ hàng của bạn</h1>

      <table className="cart-table">
        <thead>
          <tr>
            <th>Ảnh</th>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Tổng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item._id}>
              <td>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-img"
                />
              </td>
              <td>{item.name}</td>
              <td>{item.price.toLocaleString()} ₫</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item._id, parseInt(e.target.value))
                  }
                  className="qty-input"
                />
              </td>
              <td>{(item.price * item.quantity).toLocaleString()} ₫</td>
              <td>
                <button
                  className="btn-remove"
                  onClick={() => handleRemove(item._id)}
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-footer">
        <h2 className="text-xl font-bold text-gray-800">
          Tổng cộng: <span className="text-red-600">{total.toLocaleString()} ₫</span>
        </h2>
        <div className="flex gap-3">
          <button className="btn btn-primary" onClick={handleClear}>
            Xóa giỏ hàng
          </button>
          <button className="btn btn-light">Đặt hàng 💳</button>
        </div>
      </div>

      {/* ✅ Nút quay lại trang chủ */}
      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/")}
          className="btn btn-light"
        >
          ⬅️ Tiếp tục mua hàng
        </button>
      </div>
    </div>
  );
}

export default CartPage;
