import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./components/Product/ProductPage";
import SearchParams from "./components/Product/SearchParams";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
