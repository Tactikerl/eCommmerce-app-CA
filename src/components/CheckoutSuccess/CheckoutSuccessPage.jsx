import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../App";
import * as S from "./success.styled";

const CheckoutSuccess = () => {
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    clearCart();
  }, []);
  return (
    <S.SuccessWrapper>
      <S.SuccessHeaderContainer>
        {" "}
        <S.SuccessHeader>Thank You!</S.SuccessHeader>
      </S.SuccessHeaderContainer>
      <S.SuccessMessageContainer>
        <S.SuccessMessage>
          Your transaction is now complete and will be teleported to your
          imaginary castle somewhere in the aether! If you wish to continue
          browsing the nonexistent merchandise displayed in our store you can{" "}
          <S.SuccessLink to="/">Click Here!</S.SuccessLink>{" "}
        </S.SuccessMessage>
      </S.SuccessMessageContainer>
    </S.SuccessWrapper>
  );
};

export default CheckoutSuccess;
