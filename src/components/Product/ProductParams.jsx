import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import discountCalc from "./discountCalc";
import displayPrice from "./displayPrice";
import { useContext } from "react";
import { CartContext } from "../../App";
import * as S from "./productPage.styled";

const ProductPage = () => {
  const { id } = useParams();
  const [fetchedProduct, setFetchedProducts] = useState({});
  const { _, addToCart } = useContext(CartContext);

  useEffect(() => {
    requestFetchProducts(id);
  }, [id]);

  async function requestFetchProducts(id) {
    const res = await fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`);
    const json = await res.json();
    setFetchedProducts(json);
  }
  return (
    <S.ProductPageContainer>
      <S.ProductDetails>
        <S.ProductTitle>{fetchedProduct.title}</S.ProductTitle>
        <S.ProductTags>
          {fetchedProduct.tags &&
            fetchedProduct.tags.map((tag) => <span key={tag}>{tag} </span>)}
        </S.ProductTags>

        <S.ProductPrice>
          {"$"}
          {displayPrice(
            fetchedProduct.price,
            fetchedProduct.discountedPrice
          )}{" "}
          {discountCalc(fetchedProduct.price, fetchedProduct.discountedPrice)}
        </S.ProductPrice>
        <S.ProductPrice>
          {fetchedProduct.price === fetchedProduct.discountedPrice
            ? ""
            : "  Discount"}
        </S.ProductPrice>

        <S.ProductInfo>{fetchedProduct.description}</S.ProductInfo>

        <S.ProductImage
          src={fetchedProduct.imageUrl}
          alt={fetchedProduct.title}
        />

        <S.ProductRating>
          Overall Rating :{fetchedProduct.rating}
        </S.ProductRating>

        <S.AddProductButton
          onClick={() =>
            addToCart(
              fetchedProduct.id,
              fetchedProduct.title,
              fetchedProduct.imageUrl,
              displayPrice(fetchedProduct.price, fetchedProduct.discountedPrice)
            )
          }
        >
          Add to Cart
        </S.AddProductButton>
      </S.ProductDetails>
      <S.ProductReviewContainer>
        {fetchedProduct.reviews &&
          fetchedProduct.reviews.map((review) => (
            <S.ProductReviewCard key={review.id}>
              <h3>{review.username}</h3>
              <span>{review.rating}</span>
              <p>{review.description}</p>
            </S.ProductReviewCard>
          ))}
      </S.ProductReviewContainer>
    </S.ProductPageContainer>
  );
};

export default ProductPage;
