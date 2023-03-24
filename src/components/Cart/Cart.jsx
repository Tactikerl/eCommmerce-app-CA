import React from "react";

const cartImg = "🛒";
const Cart = (props) => {
  return (
    <>
      <img src={cartImg} alt="cart logo" />
      <div>{props.cartIndex}</div>
    </>
  );
};
export default Cart;
