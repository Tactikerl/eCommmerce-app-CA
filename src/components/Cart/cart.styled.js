import styled from "styled-components";

const CartImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CartIconContainer = styled.div`
  width: 30px;
  height: 30px;
  background-color: #fff;
  position: relative;
  cursor: pointer;
`;

const CartCount = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #f00;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0 5px;
  border-radius: 50%;
`;

export { CartImage, CartIconContainer, CartCount };
