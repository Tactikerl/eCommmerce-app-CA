import React, { useContext, useState } from "react";
import { CartContext } from "../../App";

const Cart = () => {
  // const [productCount, setProductCount] = useState(0);
  const { cartContent } = useContext(CartContext);
  console.log(cartContent);

  return (
    <div>
      <img className="cart-img" src="../assets/cart-icon.png" alt="cart logo" />
      <p>{cartContent.itemNumber}</p>
    </div>
  );
};
export default Cart;
