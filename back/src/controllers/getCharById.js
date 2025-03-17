const axios = require("axios");
const { urlCharacterId } = require("../utils/reusable");
const { headers } = require("../utils/reusable");

async function getCharById(req, res) {
  try {
    const { id } = req.params;
    const result = await axios(urlCharacterId(id));
    const character = result.data;
    if (character.name) {
      const personaje = {
        id: id,
        name: character.name,
        status: character.status,
        species: character.species,
        image: character.image,
        gender: character.gender,
        origin: character.origin,
        location: character.location,
        type: character.type,
      };
      res.status(200).json(personaje);
    } else {
      res.status(404).send("Character not found");
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = getCharById;

const { Country } = require("../db");

// Controlador para obtener todos los países
exports.allCountries = async (req, res) => {
  try {
    // Obtiene todos los países de la base de datos
    const countries = await Country.findAll();
    // Envía los países como respuesta
    res.status(200).json(countries);
  } catch (error) {
    // En caso de error, envía un mensaje de error
    res.status(500).json({ error: "Error fetching countries" });
  }
};
