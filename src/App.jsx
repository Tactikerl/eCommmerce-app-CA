import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductParams from "./components/Product/ProductParams";
import Layout from "./components/Layout/Layout";
import ContactPage from "./components/Contact/ContactPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product/:id" element={<ProductParams />} />
        <Route path="ContactPage" element={<ContactPage />} />
        <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
