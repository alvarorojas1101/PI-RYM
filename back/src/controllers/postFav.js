const { data } = require("../db");

const postFav = (req, res) => {
  const { id, name, origin, status, image, species, gender } = req.body;
  
  if (!name || !origin || !status || !image || !species || !gender) {
    return res.status(400).json({ message: "Faltan datos" });
  }

  // Usar un ID único para el usuario (puedes cambiar esto según tus necesidades)
  const userId = "default_user";
  
  if (!data.favorites.has(userId)) {
    data.favorites.set(userId, []);
  }

  const favorites = data.favorites.get(userId);
  const existingFavorite = favorites.find(fav => fav.name === name);

  if (!existingFavorite) {
    favorites.push({
      id,
      name,
      origin,
      status,
      image,
      species,
      gender
    });
    
    return res.json(favorites);
  }
  
  return res.json(favorites);
};

module.exports = postFav;
