import React, { useEffect, useState } from "react";
import "../stylesheets/App.scss";
import getDataFromApi from "../services/api";
import logo from "../images/logo-rick-morty.png";
import CharacterList from "./CharacterList";

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  return (
    <>
      <header>
        <img src={logo} />
      </header>
      <main>
        <form>
          <label htmlFor="search">Search:</label>
          <input type="text" id="search" name="search" />
        </form>
        <section>
          <CharacterList characters={characters} />
        </section>
      </main>
    </>
  );
};

export default App;
