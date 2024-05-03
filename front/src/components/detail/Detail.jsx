import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  function onSearch() {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ status, data }) => {
        if (data.name) setCharacter(data);
        else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((error) => window.alert("Ocurrio un error"));
  }
  useEffect(() => {
    onSearch();
  }, []);

  return (
    <div>
      {character.id && (
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img
              src={character.image}
              alt="Not Found"
              className={`${styles.image} ${styles.zoomable}`}
            />
          </div>
          <div className={styles.info}>
            <h2>ID {id}</h2>
            <h1>{character?.name} </h1>
            <h2>Gender: {character?.gender}</h2>
            <h2>Origin: {character?.origin?.name}</h2>
            <h2>Location: {character?.location?.name}</h2>
            <h2>Type: {character?.type} </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
