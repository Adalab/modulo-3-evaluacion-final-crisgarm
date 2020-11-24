import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterDetail.scss";

const CharacterDetail = (props) => {
  //console.log(parseInt(props.character.episodes.lenght));

  return (
    <>
      <article className="article">
        <img
          src={props.character.image}
          alt={"Imagen de " + props.character.name}
          title={"Imagen de " + props.character.name}
          className="article__image"
        />
        <div className="article__container">
          <h2 className="article__container--title">{props.character.name}</h2>
          <p className="article__container--status">{`Status: ${props.character.status}`}</p>
          <p className="article__container--species">{`Species: ${props.character.species}`}</p>
          <p className="article__container--origin">{`Origin: ${props.character.origin}`}</p>
          <p className="article__container--episodes">{`Episodes:${props.character.episodes.lenght}`}</p>
        </div>
      </article>
      <Link to="/" className="article__link">
        Back home
      </Link>
    </>
  );
};

export default CharacterDetail;
