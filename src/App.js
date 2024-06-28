import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import Products from "./pages/Products";
import Admin from "./pages/Admin";
import AdminNavBar from "./components/AdminNavBar";
import { Cart } from "./pages/Cart";

const userRole = "user";

const App = () => {
  return (
    <Router>
      {userRole == "user" ? (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/products" element={<Products />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </>
      ) : (
        <>
          <AdminNavBar />
         
        </>
      )}

      <Footer />
    </Router>
  );
};

export default App;
