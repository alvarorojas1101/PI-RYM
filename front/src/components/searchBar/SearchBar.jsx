import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faHome,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ onSearch, addRandomCharacter }) {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 600) {
      setIsMenuOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);

  return (
    <div>
      <div className={style.navBar}>
        <div className={style.navLeft}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={style.menuButton}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className={isMenuOpen ? style.menu : style.menuDesktop}>
            <Link to="/home">
              <button className={style.buttonSearch}>
                <FontAwesomeIcon icon={faHome} />
              </button>
            </Link>
            <Link to="/about">
              <button className={style.buttonSearch}>About</button>
            </Link>
            <Link to="/favorites">
              <button className={style.buttonSearch}>Favorites</button>
            </Link>
          </div>
        </div>
        <div>
          <input
            type="search"
            placeholder="ID del personaje..."
            value={id}
            onChange={handleChange}
          />
          <button onClick={() => onSearch(id)} className={style.buttonAdd}>
            Add
          </button>
          <button onClick={addRandomCharacter} className={style.buttonAdd}>
            Random
          </button>
        </div>
        <div
          className={style.buttonLogOut}
          onMouseOver={() => setIsMouseOver(true)}
          onMouseOut={() => setIsMouseOver(false)}>
          <span style={{ display: isMouseOver ? "inline" : "none" }}>
            Log Out
          </span>
          <Link to="/login">
            <FontAwesomeIcon icon={faSignOutAlt} />
          </Link>
        </div>
      </div>
    </div>
  );
}
