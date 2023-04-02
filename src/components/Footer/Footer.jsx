import React from "react";
import { Link } from "react-router-dom";
import * as S from "./footer.styled";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterText>Social Media</S.FooterText>
      <S.FooterText>Legal Stuff</S.FooterText>
      <S.FooterText>Keeerl LTD™</S.FooterText>
    </S.FooterWrapper>
  );
};

export default Footer;
