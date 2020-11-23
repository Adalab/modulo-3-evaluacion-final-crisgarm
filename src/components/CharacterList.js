import React from "react";
import CharacterCard from "./CharacterCard";

const ChracterList = (props) => {
  const characterItems = props.characters.map((character) => {
    return (
      <li key={character.id}>
        <CharacterCard character={character} />
      </li>
    );
  });

  return <ul>{characterItems}</ul>;
};

export default ChracterList;
