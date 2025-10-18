# API DESIGN

## 👤 USER
POST /api/users/register  → tạo tài khoản
POST /api/users/login     → đăng nhập

## 🛍 PRODUCT
GET /api/products         → lấy danh sách sản phẩm
GET /api/products/:id     → chi tiết sản phẩm
POST /api/products        → thêm sản phẩm (admin)
PUT /api/products/:id     → sửa sản phẩm
DELETE /api/products/:id  → xóa sản phẩm

## 🗂 CATEGORY
GET /api/categories
POST /api/categories
DELETE /api/categories/:id

## 🛒 CART
GET /api/cart
POST /api/cart
PUT /api/cart/:id
DELETE /api/cart/:id

## 📦 ORDER
POST /api/orders          → đặt hàng
GET /api/orders           → danh sách đơn hàng người dùng
GET /api/orders/admin     → xem toàn bộ đơn (admin)
PUT /api/orders/:id       → cập nhật trạng thái đơn hàng

## 💬 REVIEW
POST /api/reviews
GET /api/reviews/:productId
