import React from "react";
import "../stylesheets/Characters.scss";

const CharacterCard = (props) => {
  return (
    <>
      <img
        src={props.character.image}
        alt={"Imagen de " + props.character.name}
        title={"Imagen de " + props.character.name}
        className="characters__list--image"
      />
      <h2 className="characters__list--title">{props.character.name}</h2>
      <p className="characters__list--text">{props.character.species}</p>
    </>
  );
};

export default CharacterCard;
