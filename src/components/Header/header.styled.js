import styled from "styled-components";

const HeaderWrapper = styled.header`
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

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const HeaderLogoImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
`;

const HeaderLogoTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: #000;
`;

const HeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

const HeaderMenuItem = styled.li`
  margin: 0 10px;
`;

const HeaderMenuLink = styled.a`
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #f00;
  }
`;

const HeaderMenuButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #f00;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  margin: 10px 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #f00;
  }
`;

export {
  HeaderWrapper,
  HeaderLogo,
  HeaderLogoImg,
  HeaderLogoTitle,
  HeaderMenu,
  HeaderMenuItem,
  HeaderMenuLink,
  HeaderMenuButton,
};
