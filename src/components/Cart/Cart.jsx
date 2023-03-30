import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import CartPage from "./CartPage";

const Cart = () => {
  // const [productCount, setProductCount] = useState(0);
  const { cartContent } = useContext(CartContext);
  console.log(cartContent);

  return (
    <div>
      <Link to={`CartPage`}>
        <img
          className="cart-img"
          src="../assets/cart-icon.png"
          alt="cart logo"
        />
      </Link>
      <p>{cartContent.itemNumber}</p>
      <p>hello there</p>
    </div>
  );
};
export default Cart;
