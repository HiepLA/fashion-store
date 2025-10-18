# DATABASE DESIGN (MongoDB)

## 🧑‍💻 User
- name: String
- email: String
- password: String
- role: "user" hoặc "admin"

## 🏷️ Category
- name: String

## 👕 Product
- name: String
- price: Number
- description: String
- image: String
- categoryId: tham chiếu đến Category
- stock: Number (số lượng còn lại)
- brand: String

## 🛒 Order
- userId: tham chiếu đến User
- orderItems: danh sách sản phẩm đặt (productId, quantity, price)
- totalPrice: tổng tiền
- paymentMethod: COD / MoMo
- status: Pending / Shipped / Done
- createdAt: ngày tạo

## ⭐ Review
- userId
- productId
- rating: 1–5
- comment
