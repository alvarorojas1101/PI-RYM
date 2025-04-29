import axios from "axios";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/components/home/Home.jsx";
import About from "../src/components/about/About.jsx";
import Detail from "../src/components/detail/Detail.jsx";
import Nav from "./components/nav/Nav.jsx";
import "./App.css";
import Favorites from "./components/favorites/Favorites.jsx";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = async (id) => {
    try {
      if (!id) {
        window.alert("Por favor, ingresa un ID");
        return;
      }

      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const character = response.data;

      if (character.name) {
        setCharacters((oldChars) => [...oldChars, character]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      if (error.response) {
        window.alert(
          error.response.data?.message || "¡No hay personajes con este ID!"
        );
      } else {
        window.alert("Error al conectar con el servidor");
      }
    }
  };

  const onClose = (id) => {
    const filtered = characters?.filter((character) => character.id !== id);
    setCharacters(filtered);
  };
  const addRandomCharacter = () => {
    // La API de Rick and Morty tiene 826 personajes
    const randomId = Math.floor(Math.random() * 826) + 1;
    console.log("Buscando personaje con ID:", randomId);
    onSearch(randomId.toString());
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} addRandomCharacter={addRandomCharacter} />
      <Routes>
        <Route
          path="/"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
