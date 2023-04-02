import styled from "styled-components";

const SearchBarWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

const SearchBarLogo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SearchBarLogoImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
`;

const SearchBarLogoTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
`;

const SearchBarForm = styled.form`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 75px 35px;
  border-radius: 5px;
`;

const SearchBarInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 500;
  color: #000;
`;

const ProductListWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

export {
  ProductListWrapper,
  SearchBarWrapper,
  SearchBarLogo,
  SearchBarLogoImg,
  SearchBarLogoTitle,
  SearchBarForm,
  SearchBarInput,
};
