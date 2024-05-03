import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "../src/components/home/Home.jsx";
import About from "../src/components/about/About.jsx";
import Detail from "../src/components/detail/Detail.jsx";
import Nav from "./components/nav/Nav.jsx";
import "./App.css";
import Form from "./components/form/Form.jsx";
import Favorites from "./components/favorites/Favorites.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const URL = `http://localhost:3001/rickandmorty`;

  const onSearch = async (id) => {
    try {
      const { status, data } = await axios(`${URL}/character/${id}`);
      if (status >= 200 && status < 400) {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.log("Ocurrio un error");
    }
  };

  const onClose = (id) => {
    const filtered = characters?.filter((character) => character.id !== id);
    setCharacters(filtered);
  };
  const addRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    onSearch(randomId.toString());
  };

  const login = async ({ email, password }) => {
    try {
      const { data } = await axios(
        `${URL}/login?email=${email}&password=${password}`
      );
      data.access ? setAccess(true) && navigate("/home") : setAccess(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    access ? navigate("/home") : navigate("/login");
  }, [access]);

  return (
    <div className="App">
      {pathname != "/login" && (
        <Nav onSearch={onSearch} addRandomCharacter={addRandomCharacter} />
      )}
      <Routes>
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Form login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
