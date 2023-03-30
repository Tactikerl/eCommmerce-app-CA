import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext, createContext, useState } from "react";
import ProductParams from "./components/Product/ProductParams";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import ContactPage from "./components/Contact/ContactPage";
import Header from "./components/Header/Header";
import CartPage from "./components/Cart/CartPage";

export const CartContext = createContext({});

const App = () => {
  const [cartContent, setCartContent] = useState({
    itemNumber: (JSON.parse(localStorage.getItem("cartList")) || []).length,
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
    }));
  }
  return (
    <CartContext.Provider value={{ cartContent, addToCart }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/product/:id" element={<ProductParams />} />
          <Route path="ContactPage" element={<ContactPage />} />
          <Route path="CartPage" element={<CartPage />} />
          <Route path="/" element={<Layout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContext.Provider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
