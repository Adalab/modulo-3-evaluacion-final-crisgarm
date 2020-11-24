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
  const [orderFilter, setOrderFilter] = useState(false);
  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  // EVENTS
  const handleFilterChange = (data) => {
    if (data.id === "name") {
      setNameFilter(data.value);
    } else if (data.id === "species") {
      setSpeciesFilter(data.value);
    }
  };

  const handleCheckInput = (inputChecked) => {
    if (inputChecked) {
      setOrderFilter(true);
    } else {
      setOrderFilter(false);
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
  const newCharacters = [...characters];
  if (orderFilter) {
    characters.sort(function (prev, next) {
      if (prev.name > next.name) {
        return 1;
      }
      if (prev.name < next.name) {
        return -1;
      }
      return 0;
    });
  } else {
    const characters = [...newCharacters];
  }
  console.log(newCharacters, characters);

  const renderCharacterDetail = (props) => {
    const findCharacter = characters.find((character) => {
      return character.id === parseInt(props.match.params.id);
    });
    if (findCharacter !== undefined) {
      return <CharacterDetail character={findCharacter} />;
    }
  };

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Filters
              handleFilterChange={handleFilterChange}
              nameFilter={nameFilter}
              handleCheckInput={handleCheckInput}
            />
            <section>
              <CharacterList characters={filteredCharacters} />
            </section>
          </Route>
          <Route path="/character/:id" render={renderCharacterDetail} />
        </Switch>
      </main>
    </>
  );
};

export default App;
