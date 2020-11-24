import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/App.scss";
import "../stylesheets/Form.scss";
import getDataFromApi from "../services/api";
import Header from "./Header";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";

const App = () => {
  // STATES
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("all");
  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  // EVENTS
  const handleFilterChange = (data) => {
    if (data.id === "name") {
      setNameFilter(data.value);
    } else if (data.id === "species") {
      setSpeciesFilter(data.value);
      console.log(data.id, data.value);
    }
  };

  // RENDER
  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(nameFilter.toLowerCase());
    })
    .filter((character) => {
      return speciesFilter === "all"
        ? true
        : character.species.toLowerCase() === speciesFilter;
    });

  const renderCharacterDetail = (props) => {
    const findCharacter = characters.find((character) => {
      return character.id === parseInt(props.match.params.id);
    });
    return <CharacterDetail character={findCharacter} />;
  };

  return (
    <>
      <Header />
      <main>
        <Filters
          handleFilterChange={handleFilterChange}
          nameFilter={nameFilter}
        />
        <section>
          <CharacterList characters={filteredCharacters} />
        </section>
        <Switch>
          <Route path="/character/:id" render={renderCharacterDetail} />
        </Switch>
      </main>
    </>
  );
};

export default App;
