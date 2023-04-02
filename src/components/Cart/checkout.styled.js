import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const CheckoutHeader = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: #000;
`;

const CheckoutCartListDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin: 10px 0;
`;

const CheckoutCartList = styled.ul`
  margin 0;
  padding 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const CheckoutProductCard = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 200px;
  margin: 10px 0;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const CheckoutProductImage = styled.img`
  overflow: hidden;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const CheckoutProductTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
`;

const CheckoutProductPrice = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
`;

const CheckoutProductQuantity = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
`;

const CheckoutProductRemove = styled.button`
  width: 100%;
  height: 50px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 1.2rem;
  background-color: #000;
  color: #fff;
  cursor: pointer;
`;

const CheckoutProductAdd = styled.button`
  width: 100%;
  height: 50px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 1.2rem;
  background-color: #000;
  color: #fff;
  cursor: pointer;
`;

const CheckoutTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const CheckoutTotalPrice = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
`;

const CheckoutConfirmDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin: 10px 0;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const CheckoutConfirmButton = styled.button`
  width: 50%;
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

export {
  CheckoutWrapper,
  CheckoutProductCard,
  CheckoutProductImage,
  CheckoutProductTitle,
  CheckoutProductPrice,
  CheckoutProductQuantity,
  CheckoutProductRemove,
  CheckoutProductAdd,
  CheckoutTotal,
  CheckoutTotalPrice,
  CheckoutConfirmButton,
  CheckoutCartList,
  CheckoutHeader,
  CheckoutCartListDiv,
  CheckoutConfirmDiv,
};
