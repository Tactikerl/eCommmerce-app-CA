import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext, createContext, useState } from "react";
import ProductParams from "./components/Product/ProductParams";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import ContactPage from "./components/Contact/ContactPage";
import Header from "./components/Header/Header";

export const CartContext = createContext({});

const App = () => {
  const [cartContent, setCartContent] = useState({
    itemNumber: 0,
  });
  function addToCart(id) {
    localStorage.setItem("productId", id);
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
