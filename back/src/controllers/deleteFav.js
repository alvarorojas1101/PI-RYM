const { data } = require("../db");

const deleteFav = (req, res) => {
  const { id } = req.params;
  
  // Usar un ID único para el usuario
  const userId = "default_user";
  
  if (!data.favorites.has(userId)) {
    return res.status(404).json({ message: "No se encontraron favoritos" });
  }

  const favorites = data.favorites.get(userId);
  const index = favorites.findIndex(fav => fav.id === parseInt(id));

  if (index !== -1) {
    favorites.splice(index, 1);
    return res.json(favorites);
  }
  
  return res.status(404).json({ message: "Personaje no encontrado en favoritos" });
};

module.exports = deleteFav;
