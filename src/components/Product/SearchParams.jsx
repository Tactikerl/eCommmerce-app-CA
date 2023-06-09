import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import * as S from "./searchBar.styled";

const SearchParams = () => {
  const [fetchProducts, setFetchProducts] = useState([]);
  const [productSearch, setProductSearch] = useState("");
  // const [isLoading, setIsLoading] = useState(false)
  // const [hasError, setHasError] = useState(false)

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
      <S.SearchBarForm className="search-bar">
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
      </S.SearchBarForm>
      <S.ProductListWrapper className="product-list">
        {fetchProducts
          .filter(
            (products) =>
              products.title
                .toLowerCase()
                .includes(productSearch.toLocaleLowerCase()) ||
              products.tags.join().includes(productSearch)
          )
          .map((product) => (
            <ProductList
              title={product.title}
              image={product.imageUrl}
              price={product.price}
              onSale={
                product.price === product.discountedPrice ? "" : " : Discount "
              }
              discount={product.discountedPrice}
              tags={product.tags}
              key={product.id}
              id={product.id}
            />
          ))}
      </S.ProductListWrapper>
    </div>
  );
};

export default SearchParams;
