import React from "react";
import logo from "../images/logo-rick-morty.png";
import "../stylesheets/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="header__image" />
    </header>
  );
};

export default Header;
