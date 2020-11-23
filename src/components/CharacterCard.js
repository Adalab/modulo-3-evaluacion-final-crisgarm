import React from "react";

const CharacterCard = (props) => {
  return (
    <>
      <img
        src={props.character.image}
        alt={"Imagen de " + props.character.name}
        title={"Imagen de " + props.character.name}
      />
      <h2>{props.character.name}</h2>
      <p>{props.character.species}</p>
    </>
  );
};

export default CharacterCard;
