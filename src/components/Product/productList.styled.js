import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;

  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 10px 0;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const ProductRatingStar = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  margin-right: 5px;
`;

const ProductButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #000;
  color: #fff;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
  &:active {
    animation: ${fadeIn} 0.3s ease-in-out;
  }
`;

const ProductTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px 0;
`;

const ProductTag = styled.span`
  padding: 5px 10px;
  background-color: #000;
  opacity: 0.4;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 5px;
  margin: 5px;
`;

export {
  ProductWrapper,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductButton,
  ProductTags,
  ProductTag,
  ProductRating,
  ProductRatingStar,
};
