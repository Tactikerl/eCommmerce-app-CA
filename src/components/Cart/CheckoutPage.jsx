import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../App";
import * as S from "./checkout.styled";

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
    <S.CheckoutWrapper>
      <S.CheckoutHeader>Checkout</S.CheckoutHeader>

      <S.CheckoutCartList>
        <S.CheckoutConfirmButton onClick={() => clearCart()}>
          Clear Cart
        </S.CheckoutConfirmButton>
        {cartContent.cartList.map((item) => (
          <S.CheckoutProductCard key={item.id}>
            {" "}
            <S.CheckoutProductImage src={item.image} alt={item.title} />{" "}
            <S.CheckoutProductTitle>{item.title}</S.CheckoutProductTitle>{" "}
            <S.CheckoutProductPrice>{item.price}</S.CheckoutProductPrice>{" "}
            <S.CheckoutProductQuantity>{item.count}</S.CheckoutProductQuantity>
            <S.CheckoutProductAdd onClick={() => addToCart(item.id)}>
              +
            </S.CheckoutProductAdd>
            <S.CheckoutProductRemove onClick={() => removeFromCart(item.id)}>
              -
            </S.CheckoutProductRemove>
          </S.CheckoutProductCard>
        ))}
      </S.CheckoutCartList>
      <S.CheckoutTotal>
        <S.CheckoutTotalPrice>
          Total: {Math.round(priceTotal(cartContent.cartList) * 100) / 100}
        </S.CheckoutTotalPrice>
        <S.CheckoutConfirmButton onClick={() => clearCart()}>
          Clear Cart
        </S.CheckoutConfirmButton>
        <Link to={`CheckoutSuccess`}>
          <S.CheckoutConfirmButton>Confirm Order</S.CheckoutConfirmButton>
        </Link>
      </S.CheckoutTotal>
    </S.CheckoutWrapper>
  );
};

export default CartPage;
