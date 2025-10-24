import React, { createContext, useContext, useState, useEffect } from "react";
import { getCart } from "./cartUtils";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  // Lấy số lượng sản phẩm khi mở web
  useEffect(() => {
    const cart = getCart();
    setCartCount(cart.reduce((sum, item) => sum + item.quantity, 0));
  }, []);

  // Cập nhật khi có thay đổi
  const updateCart = () => {
    const cart = getCart();
    setCartCount(cart.reduce((sum, item) => sum + item.quantity, 0));
  };

  return (
    <CartContext.Provider value={{ cartCount, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
