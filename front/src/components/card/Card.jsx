import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions/index";

export default function Card({
  id,
  name,
  status,
  species,
  image,
  gender,
  type,
  origin,
  onClose,
}) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    favorites.some((fav) => fav.id === id) && setIsFav(true);
  }, [favorites]);

  const handleClick = () => {
    onClose(id);
  };

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(
        addFav({
          id,
          name,
          status,
          species,
          image,
          gender,
          type,
          origin,
          onClose,
        })
      );
    }
  };

  return (
    <div className={style.card}>
      <div id={id}>
        {isFav ? (
          <button onClick={handleFavorite} className={style.favorite}>
            ❤️
          </button>
        ) : (
          <button onClick={handleFavorite} className={style.favorite}>
            🤍
          </button>
        )}
        {!isFav && (
          <button onClick={handleClick} className={style.close}>
            X
          </button>
        )}
        <Link to={`/detail/${id}`}>
          <h2> {name}</h2>
          <div className={style.imageContainer}>
            <img src={image} alt="Not Found" />
            <div className={style.textOverlay}>
              <h3>Status: {status}</h3>
              <h3>Species: {species}</h3>
              <h3>Gender: {gender}</h3>
              <h3>ID {id}</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
