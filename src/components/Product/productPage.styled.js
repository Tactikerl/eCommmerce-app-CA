import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ProductPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductDetails = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ProductTags = styled.span`
  padding: 5px 10px;
  margin: 5px;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
`;

const ProductImage = styled.img`
  grid-area: image;
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 5px;
`;

const ProductInfo = styled.div`
  grid-area: info;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const AddProductButton = styled.button`
  grid-area: button;
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

const ProductTitle = styled.h1`
  grid-area: title;
  font-size: 2rem;
  font-weight: 500;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  grid-area: price;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
`;

const ProductRating = styled.div`
  grid-area: rating;
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const ProductReviewContainer = styled.div`
  grid-area: review;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px
  align-items: center;
 
`;

const ProductReviewCard = styled.div`
  border: 1px solid #000;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const ProductReviewTitle = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  margin: 10px 0;
`;

const ProductReviewText = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  margin: 10px 0;
`;

const ProductReviewerName = styled.h3`
  font-size: 1.2rem;
  font-weight: 300;
  margin: 10px 0;
`;

const ProductReviewRating = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const ProductReviewRatingStar = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  margin-right: 5px;
`;

export {
  ProductPageContainer,
  ProductDetails,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ProductRating,
  ProductReviewContainer,
  ProductReviewCard,
  ProductReviewTitle,
  ProductReviewText,
  ProductReviewerName,
  ProductReviewRating,
  ProductReviewRatingStar,
  ProductTags,
  AddProductButton,
};
