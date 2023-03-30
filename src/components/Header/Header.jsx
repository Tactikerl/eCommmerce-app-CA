import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
const Header = () => {
  return (
    <div className="nav-container">
      <div>
        <h1>
          <Link to="/">Shop eCom</Link>
        </h1>
      </div>
      <Nav />
    </div>
  );
};

export default Header;
