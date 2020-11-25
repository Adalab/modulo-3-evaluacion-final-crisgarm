import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Characters.scss";
import PropTypes from "prop-types";

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

CharacterCard.defaultProps = {
  name: "Unknown character",
  image:
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/assets/img/19.jpeg",
  species: "Unknown",
};

CharacterCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
};

export default CharacterCard;
