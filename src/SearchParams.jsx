import { useEffect, useState } from "react";
import Product from "./Product";
// const TAGS = [
//   "electronics",
//   "perfume",
//   "beauty",
//   "shoes",
//   "headphones",
//   "fashion",
//   "bags",
//   "glasses",
//   "watch",
//   "shampoo",
//   "toy",
//   "computers",
//   "audio",
//   "accessories",
//   "wearables",
//   "gaming",
//   "storage",
//   "peripherals",
//   "jewelry",
//   "skin care",
// ];
const SearchParams = () => {
  const [fetchProducts, setFetchProducts] = useState([]);
  const [productSearch, setProductSearch] = useState("");

  useEffect(() => {
    requestFetchProducts();
  }, []);

  async function requestFetchProducts() {
    const res = await fetch(`https://api.noroff.dev/api/v1/online-shop`);
    const json = await res.json();
    setFetchProducts(json);
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="productSearch">
          Product Search
          <input
            id="productSearch"
            value={productSearch}
            onChange={(e) => {
              setProductSearch(e.target.value);
            }}
            placeholder="Search..."
          />
        </label>

        <button>Search</button>
      </form>
      {fetchProducts
        .filter(
          (products) =>
            products.title
              .toLowerCase()
              .includes(productSearch.toLocaleLowerCase()) ||
            products.tags.join().includes(productSearch)
        )
        .map((product) => (
          <Product
            title={product.title}
            image={product.imageUrl}
            price={
              product.discountedPrice > product.price
                ? product.price
                : product.discountedPrice
            }
            onSale={
              product.price === product.discountedPrice ? "" : " : On Sale!"
            }
            discount={(Math.round((product.discountedPrice * 100) / product.price - 100 )) + "%"}
            tags={product.tags}
            key={product.id}
          />
        ))}
    </div>
  );
};

export default SearchParams;
