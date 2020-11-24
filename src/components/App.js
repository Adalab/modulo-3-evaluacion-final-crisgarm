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
  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  //events
  const handleInputChange = (data) => {
    console.log(data);
  };
  return (
    <>
      <Header />
      <main>
        <Filters handleInputChange={handleInputChange} />
        <section>
          <CharacterList characters={characters} />
        </section>
      </main>
    </>
  );
};

export default App;
