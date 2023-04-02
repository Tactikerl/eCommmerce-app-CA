import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import * as S from "./nav.styled";

const Nav = () => {
  return (
    <S.NavWrapper>
      <S.NavMenu>
        <S.NavMenuItem>
          <Link to="/ContactPage">Contact Us</Link>
        </S.NavMenuItem>
        <S.NavMenuItem>
          <Link to="/">Home</Link>
        </S.NavMenuItem>
        <S.NavMenuItem>
          <Cart cartImg />
        </S.NavMenuItem>
        <S.NavMenuItem>
          <S.NavLogoLink to="/">Shop eCom</S.NavLogoLink>
        </S.NavMenuItem>
      </S.NavMenu>
    </S.NavWrapper>
  );
};

export default Nav;
