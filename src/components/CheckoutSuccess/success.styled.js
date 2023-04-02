import styled from "styled-components";

const SuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const SuccessHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50%;
  background-color: #fff;
`;

const SuccessMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  height: 50%;
  background-color: #fff;
`;

const SuccessHeader = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: #000;
`;

const SuccessMessage = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  text-align: center;
`;

const SuccessLink = styled.a`
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  cursor: pointer;
`;

export {
  SuccessWrapper,
  SuccessHeader,
  SuccessMessage,
  SuccessLink,
  SuccessHeaderContainer,
  SuccessMessageContainer,
};
