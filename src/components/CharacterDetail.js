import React from "react";
import "../stylesheets/CharacterDetail.scss";

const CharacterDetail = (props) => {
  console.log(props.character);
  return (
    <article className="article">
      <img
        src={props.character.image}
        alt={"Imagen de " + props.character.name}
        title={"Imagen de " + props.character.name}
      />
      <h2>{props.character.name}</h2>
      <p>Status:</p>
      <p>{`Species: ${props.character.species}`}</p>
      <p>Origin:</p>
      <p>Episodes:</p>
    </article>
  );
};

export default CharacterDetail;
