import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchParams from "../Product/SearchParams";

const Layout = () => {
  return (
    <>
      <Header />
      <SearchParams />
      <Footer
        socials="Social Media Stuff"
        contact="Contact Info"
        trademark="Kvammen Industries ™"
      />
    </>
  );
};

export default Layout;
