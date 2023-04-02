import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import * as S from "./cart.styled";
import cartIcon from "../../assets/cart-icon.png";

const Cart = () => {
  const { cartContent } = useContext(CartContext);

  return (
    <S.CartIconContainer>
      <Link to={`CartPage`}>
        <S.CartImage src={cartIcon} alt="cart logo" />
      </Link>
      <S.CartCount>{cartContent.itemNumber}</S.CartCount>
    </S.CartIconContainer>
  );
};
export default Cart;
