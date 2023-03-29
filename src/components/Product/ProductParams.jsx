import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import discountCalc from "./discountCalc";
import displayPrice from "./displayPrice";

const ProductPage = () => {
  const { id } = useParams();
  const [fetchedProduct, setFetchedProducts] = useState({});

  useEffect(() => {
    requestFetchProducts(id);
  }, [id]);

  async function requestFetchProducts(id) {
    const res = await fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`);
    const json = await res.json();
    setFetchedProducts(json);
  }
  return (
    <div>
      <div className="product-container">
        <h1>{fetchedProduct.title}</h1>
        <p>
          {fetchedProduct.tags &&
            fetchedProduct.tags.map((tag) => <span key={tag}>{tag} </span>)}
        </p>
        <div className="price-container">
          <h2 className="product-price">
            {displayPrice(fetchedProduct.price, fetchedProduct.discountedPrice)}{" "}
            {discountCalc(fetchedProduct.price, fetchedProduct.discountedPrice)}
          </h2>
          <p>
            {fetchedProduct.price === fetchedProduct.discountedPrice
              ? ""
              : "  Discount"}
          </p>
        </div>
        <p className="product-body">{fetchedProduct.description}</p>
        <div className="image-container">
          <img src={fetchedProduct.imageUrl} alt={fetchedProduct.title} />
        </div>
      </div>
      <div className="review-container">
        <div className="overall-rating">
          <h3>Overall Rating :{fetchedProduct.rating}</h3>
        </div>
        {fetchedProduct.reviews &&
          fetchedProduct.reviews.map((review) => (
            <div className="review-card" key={review.id}>
              <h3>{review.username}</h3>
              <span>{review.rating}</span>
              <p>{review.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductPage;
