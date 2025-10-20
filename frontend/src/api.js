import axios from "axios";

const API_URL = "http://localhost:5000/api"; // cổng backend của bạn

export const getProducts = (params = {}) =>
  axios.get(`${API_URL}/products`, { params });

export const getProductById = (id) =>
  axios.get(`${API_URL}/products/${id}`);

export const getCategories = () =>
  axios.get(`${API_URL}/categories`);
