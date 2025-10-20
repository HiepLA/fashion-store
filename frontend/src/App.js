import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import ProductPage from "./pages/ProductPage";
import SearchPage from "./pages/SearchPage";
import "./App.css";
import CartPage from "./pages/CartPage";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/category/:id" element={<ProductPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
