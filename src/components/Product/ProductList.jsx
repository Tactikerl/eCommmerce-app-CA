import { Link } from "react-router-dom";
import discountCalc from "./discountCalc";
import displayPrice from "./displayPrice";
import { useContext } from "react";
import { CartContext } from "../../App";

const ProductList = (props) => {
  const { cartContent, addToCart } = useContext(CartContext);
  return (
    <div>
      <Link to={`/product/${props.id}`}>
        <h1 className="product-title">{props.title}</h1>
        <div className="image-container">
          <img src={props.image} alt={props.title} />
        </div>
      </Link>
      <h2 className="product-price">
        {displayPrice(props.price, props.discount)}
        {props.onSale}
        {discountCalc(props.price, props.discount)}
      </h2>

      <p>
        {props.tags.map((tag) => (
          <span key={tag}>{tag} </span>
        ))}
      </p>
      <div className="buttons">
        <Link to={`/product/${props.id}`}>View Product</Link>
        <button
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
        </button>
      </div>
    </div>
  );
};

export default ProductList;
