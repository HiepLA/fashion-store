import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // URL backend
});

// 🟢 Lấy danh sách sản phẩm
export const getProducts = (params = {}) => API.get("/products", { params });

// 🟢 Lấy chi tiết sản phẩm
export const getProductById = (id) => API.get(`/products/${id}`);

// 🟢 Lấy danh mục
export const getCategories = () => API.get("/categories");

export default API;
