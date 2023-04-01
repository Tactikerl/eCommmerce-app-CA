import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import Cart from "../Cart/Cart";
import * as S from "./header.styled";

const Header = () => {
  return (
    <div className="nav-container">
      <div>
        <h1>
          <Link to="/">Shop eCom</Link>
        </h1>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
