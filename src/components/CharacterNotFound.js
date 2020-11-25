import React from "react";
import notFound from "../images/rick-morty.png";
import "../stylesheets/CharacterNotFound.scss";

const CharacterNotFound = () => {
  return (
    <div className="character__container">
      <p className="character__text">Character not found</p>
      <img
        className="character__image"
        src={notFound}
        alt="Rick and Morty"
        title="Rick and Morty"
      />
    </div>
  );
};

export default CharacterNotFound;
