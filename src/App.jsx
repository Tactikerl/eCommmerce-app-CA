import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import ProductParams from "./components/Product/ProductParams";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import ContactPage from "./components/Contact/ContactPage";
import Header from "./components/Header/Header";
import CartPage from "./components/Cart/CheckoutPage";
import CheckoutSuccess from "./components/CheckoutSuccess/CheckoutSuccessPage";

export const CartContext = createContext({ cartContent: { cartList: [] } });
function productTotal(cartList) {
  if (!cartList) return 0;
  let totalCount = cartList.reduce((acc, item) => acc + item.count, 0);
  return totalCount;
}

const App = () => {
  const [cartContent, setCartContent] = useState({
    itemNumber: productTotal(JSON.parse(localStorage.getItem("cartList"))),
    cartList: JSON.parse(localStorage.getItem("cartList")) || [],
  });

  function addToCart(id, title, image, price) {
    let cartProduct = {
      id: id,
      title: title,
      image: image,
      price: price,
      count: 1,
    };
    let cartList = JSON.parse(localStorage.getItem("cartList")) || [];

    let result = cartList.find((item) => item.id === id);
    if (!result) {
      cartList.push(cartProduct);
    } else {
      result.count++;
    }
    localStorage.setItem("cartList", JSON.stringify(cartList));
    setCartContent((state) => ({
      ...state,
      itemNumber: state.itemNumber + 1,
      cartList: cartList,
    }));
  }
  function removeFromCart(id) {
    let cartList = JSON.parse(localStorage.getItem("cartList")) || [];
    let result = cartList.find((item) => item.id === id);
    if (result.count > 1) {
      result.count--;
    } else {
      cartList = cartList.filter((item) => item.id !== id);
    }
    localStorage.setItem("cartList", JSON.stringify(cartList));
    setCartContent((state) => ({
      ...state,
      itemNumber: state.itemNumber - 1,
      cartList: cartList,
    }));
  }
  function clearCart() {
    localStorage.removeItem("cartList");
    setCartContent((state) => ({
      ...state,
      itemNumber: 0,
      cartList: [],
    }));
  }
  return (
    <CartContext.Provider
      value={{ cartContent, addToCart, removeFromCart, clearCart }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/product/:id" element={<ProductParams />} />
          <Route path="ContactPage" element={<ContactPage />} />
          <Route
            path="/CartPage/CheckoutSuccess"
            element={<CheckoutSuccess />}
          />
          <Route path="CartPage" element={<CartPage />} />
          <Route path="/" element={<Layout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContext.Provider>
  );
};

let container = null;

document.addEventListener("DOMContentLoaded", () => {
  if (!container) {
    container = document.getElementById("root");
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
});
