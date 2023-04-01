import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100%;
  height: 80px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  z-index: 999;
`;

const FooterText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
`;

export { FooterWrapper, FooterText };
