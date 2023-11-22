import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import ProductPage from "./pages/ProductPage";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./header/Header";

export default function App() {
  return (
    <Container className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </Container>
  );
}
