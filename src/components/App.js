import React, { useEffect, useState } from "react";
import "../stylesheets/App.scss";
import "../stylesheets/Form.scss";
import getDataFromApi from "../services/api";
import Header from "./Header";
import CharacterList from "./CharacterList";

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  return (
    <>
      <Header />
      <main>
        <form className="form">
          <label className="form__label" htmlFor="search">
            Search:
          </label>
          <input
            type="text"
            id="search"
            name="search"
            className="form__input"
          />
        </form>
        <section>
          <CharacterList characters={characters} />
        </section>
      </main>
    </>
  );
};

export default App;
