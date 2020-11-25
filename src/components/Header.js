import React from "react";
import logo from "../images/logo-rick-morty.png";
import "../stylesheets/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Logo de Rick and Morty"
        title="Logo de Rick and Morty"
        className="header__image"
      />
    </header>
  );
};

export default Header;
