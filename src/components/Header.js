import React from "react";
import logo from "../images/logo-rick-morty.png";
import "../stylesheets/Header.scss";
import audio from "../audio/rick-and-morty-theme-song-hd.mp3";

const Header = () => {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Logo de Rick and Morty"
        title="Logo de Rick and Morty"
        className="header__image"
      />
      <audio className="header__audio" autoplay controls loop>
        <source src={audio} type="audio/mp3" />
      </audio>
    </header>
  );
};

export default Header;
