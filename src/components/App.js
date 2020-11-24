import React, { useEffect, useState } from "react";
import "../stylesheets/App.scss";
import "../stylesheets/Form.scss";
import getDataFromApi from "../services/api";
import Header from "./Header";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

const App = () => {
  //state
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("All");
  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  //events
  const handleFilterChange = (data) => {
    console.log(data);
  };
  return (
    <>
      <Header />
      <main>
        <Filters handleFilterChange={handleFilterChange} />
        <section>
          <CharacterList characters={characters} />
        </section>
      </main>
    </>
  );
};

export default App;
