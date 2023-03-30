import React, { useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartList")) || []
  );

  return (
    <div>
      <ul>
        {cartItems.map((item) => (
          <li className="cart-products" key={item.id}>
            {" "}
            <h2>{item.title}</h2> <img src={item.image} alt={item.title} />{" "}
            <p>{item.price}</p>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
