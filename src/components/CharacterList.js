import React from "react";
import CharacterCard from "./CharacterCard";
import "../stylesheets/Characters.scss";

const ChracterList = (props) => {
  const characterItems = props.characters.map((character) => {
    return (
      <li key={character.id} className="characters__list">
        <CharacterCard character={character} />
      </li>
    );
  });

  return <ul className="characters">{characterItems}</ul>;
};

export default ChracterList;
