const { Favorite } = require("../db");

const getAllFavorites = async () => {
  return await Favorite.findAll();
};

module.exports = getAllFavorites;
