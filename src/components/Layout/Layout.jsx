import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import * as S from "./layout.styled";

const Layout = (props) => {
  return (
    <S.LayoutWrapper>
      <Header />
      {props.children}
      <Footer />
    </S.LayoutWrapper>
  );
};

export default Layout;
