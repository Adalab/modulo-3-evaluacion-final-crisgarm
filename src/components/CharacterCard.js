import React from "react";
import { Link } from "react-router-dom";

import "../stylesheets/Characters.scss";

const CharacterCard = (props) => {
  return (
    <>
      <Link to={`/character/${props.character.id}`}>
        <img
          src={props.character.image}
          alt={"Imagen de " + props.character.name}
          title={"Imagen de " + props.character.name}
          className="characters__list--image"
        />
        <h2 className="characters__list--title">{props.character.name}</h2>
        <p className="characters__list--text">{props.character.species}</p>
      </Link>
    </>
  );
};

export default CharacterCard;
