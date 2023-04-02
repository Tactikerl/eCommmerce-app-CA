import styled from "styled-components";

export const NavWrapper = styled.nav`
  grid-area: Menu;
  width: 100%;
  height: 80px;
  background-color: #d8e1ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const NavLogoImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
`;

export const NavLogoLink = styled.a`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #f00;
    transform: scale(1.1);
  }
`;

export const NavLogoTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const NavMenuItem = styled.li`
  margin: 0 10px;
`;

export const NavMenuLink = styled.a`
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #f00;
  }
`;

export const NavMenuButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #f00;
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
  }
`;

export const NavMenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
  }
`;

export const NavMenuIconClose = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
  }
`;

export const NavMenuIconCloseWrapper = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
  }
`;
