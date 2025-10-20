// src/utils/cartUtils.js
export const getCart = () => {
  try {
    const raw = localStorage.getItem("cart");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// ✅ Thêm vào giỏ
export const addToCart = (product) => {
  const cart = getCart();
  const idx = cart.findIndex((it) => it._id === product._id);

  if (idx > -1) {
    cart[idx].quantity = (cart[idx].quantity || 1) + 1;
  } else {
    cart.push({
      _id: product._id,
      name: product.name,
      price: Number(product.price) || 0,
      image: product.image,
      quantity: 1,
    });
  }
  saveCart(cart);
  // Báo cho Header & các trang khác cập nhật badge ngay
  window.dispatchEvent(new Event("cartUpdated"));
};

// ✅ Cập nhật / Xóa / Clear (để sau dùng trong CartPage)
export const updateQuantity = (id, qty) => {
  const cart = getCart().map((it) =>
    it._id === id ? { ...it, quantity: Math.max(1, qty) } : it
  );
  saveCart(cart);
  window.dispatchEvent(new Event("cartUpdated"));
};

export const removeFromCart = (id) => {
  const cart = getCart().filter((it) => it._id !== id);
  saveCart(cart);
  window.dispatchEvent(new Event("cartUpdated"));
};

export const clearCart = () => {
  localStorage.removeItem("cart");
  window.dispatchEvent(new Event("cartUpdated"));
};
