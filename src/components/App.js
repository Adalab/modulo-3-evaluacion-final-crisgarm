import React, { useEffect, useState } from "react";
import "../stylesheets/App.scss";
import getDataFromApi from "../services/api";

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    console.log("Me estoy montando");
    getDataFromApi().then((data) => setCharacters(data));
  }, []);
  console.log(characters);

  return <div className="App">Hola Cris</div>;
};

export default App;
