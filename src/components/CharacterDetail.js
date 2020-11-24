import React from "react";

const CharacterDetail = (props) => {
  console.log(props.character);
  return (
    <div>
      <img
        src={props.character.image}
        alt={"Imagen de " + props.character.name}
        title={"Imagen de " + props.character.name}
      />
      <h2>{props.character.name}</h2>
      <p>Status:</p>
      <p>Species:{props.character.species}</p>
      <p>Origin:</p>
      <p>Episodes:</p>
    </div>
  );
};

export default CharacterDetail;
