import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ContactPage">Contact Us</Link>
        </li>
        {/* <li><Cart cartImg cartIndex={}/></li> */}
      </ul>
    </nav>
  );
};

export default Nav;
