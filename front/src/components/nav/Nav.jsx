import SearchBar from "../searchBar/SearchBar";
import "./Nav.module.css";

export default function Nav({ onSearch, addRandomCharacter }) {
  return (
    <nav>
      <SearchBar onSearch={onSearch} addRandomCharacter={addRandomCharacter} />
    </nav>
  );
}
