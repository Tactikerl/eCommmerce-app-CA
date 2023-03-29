import React, { useState } from "react";

const cartImg = "🛒";
const Cart = (props) => {
  const [productCount, setProductCount] = useState(0);

  return (
    <>
      <img src={cartImg} alt="cart logo" />
      <div>{props.cartIndex}</div>
    </>
  );
};
export default Cart;
