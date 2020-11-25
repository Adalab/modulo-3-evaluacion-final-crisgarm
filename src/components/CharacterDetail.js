import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterDetail.scss";
import PropTypes from "prop-types";

const CharacterDetail = (props) => {
  let status;
  if (props.character.status === "Dead") {
    status = "fas fa-skull-crossbones";
  } else if (props.character.status === "unknown") {
    status = "far fa-question-circle";
  } else {
    status = "fas fa-heartbeat";
  }

  let species;
  if (props.character.species === "Human") {
    species = "fas fa-user";
  } else if (props.character.species === "Alien") {
    species = "fab fa-reddit-alien";
  }

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
          <p className="article__container--status">
            Status:
            <i class={status}></i>
          </p>
          <p className="article__container--species">
            Species:
            <i class={species}></i>
          </p>
          <p className="article__container--origin">{`Origin: ${props.character.origin}`}</p>
          <p className="article__container--episodes">{`Episodes: ${props.character.episodes.length}`}</p>
        </div>
      </article>
      <Link to="/" className="article__link">
        Back home
      </Link>
    </>
  );
};

CharacterDetail.defaultProps = {
  name: "Unknown character",
  image:
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/assets/img/19.jpeg",
  origin: "Unknown",
  episodes: "Unknown",
};

CharacterDetail.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  origin: PropTypes.string,
  episodes: PropTypes.number,
};
export default CharacterDetail;
