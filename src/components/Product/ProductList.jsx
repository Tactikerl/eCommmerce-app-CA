import { Link } from "react-router-dom";
import discountCalc from "./discountCalc";
import displayPrice from "./displayPrice";
import { useContext } from "react";
import { CartContext } from "../../App";
import * as S from "./productList.styled";

const ProductList = (props) => {
  const { cartContent, addToCart } = useContext(CartContext);
  return (
    <S.ProductWrapper>
      <Link to={`/product/${props.id}`}>
        <S.ProductTitle>{props.title}</S.ProductTitle>

        <S.ProductImage src={props.image} alt={props.title} />
      </Link>
      <S.ProductPrice>
        {displayPrice(props.price, props.discount)}
        {props.onSale}
        {discountCalc(props.price, props.discount)}
      </S.ProductPrice>

      <S.ProductTag>
        {props.tags.map((tag) => (
          <span key={tag}>{tag} </span>
        ))}
      </S.ProductTag>
      <div>
        <Link to={`/product/${props.id}`}>
          <S.ProductButton>View Product</S.ProductButton>
        </Link>
        <S.ProductButton
          onClick={() =>
            addToCart(
              props.id,
              props.title,
              props.image,
              displayPrice(props.price, props.discount)
            )
          }
        >
          Add to Cart
        </S.ProductButton>
      </div>
    </S.ProductWrapper>
  );
};

export default ProductList;
