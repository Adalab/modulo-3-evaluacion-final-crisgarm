import React from "react";
import CharacterCard from "./CharacterCard";
import "../stylesheets/Characters.scss";
import CharacterNotFound from "./CharacterNotFound";

const CharacterList = (props) => {
  const characterItems = props.characters.map((character) => {
    return (
      <li key={character.id} className="characters__list">
        <CharacterCard character={character} />
      </li>
    );
  });

  return characterItems.length === 0 ? (
    <CharacterNotFound />
  ) : (
    <ul className="characters">{characterItems}</ul>
  );
};
export default CharacterList;
