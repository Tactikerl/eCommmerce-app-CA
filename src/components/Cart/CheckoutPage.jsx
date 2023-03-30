import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../App";

const CartPage = () => {
  const { cartContent, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);

  function priceTotal(cartList) {
    if (!cartList) return 0;
    let totalPrice = cartList.reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
    return totalPrice;
  }

  return (
    <div>
      <ul>
        <h2>Checkout</h2>
        <div>
          <button onClick={() => clearCart()}>Clear Cart</button>
        </div>

        {cartContent.cartList.map((item) => (
          <li className="cart-products" key={item.id}>
            {" "}
            <h2>{item.title}</h2> <img src={item.image} alt={item.title} />{" "}
            <p>{item.price}</p>{" "}
            <div>
              <button onClick={() => addToCart(item.id)}>+</button>
              <p>{item.count}</p>
              <button onClick={() => removeFromCart(item.id)}>-</button>
            </div>
          </li>
        ))}
        <div>
          <div>
            <button onClick={() => clearCart()}>Clear Cart</button>
          </div>
          <h2>
            Total: {Math.round(priceTotal(cartContent.cartList) * 100) / 100}
          </h2>
        </div>
        <div>
          <Link to={`CheckoutSuccess`}>
            <button>Confirm Order</button>
          </Link>
          <p></p>
        </div>
      </ul>
    </div>
  );
};

export default CartPage;
