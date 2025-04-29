const axios = require("axios");
const { urlCharacterId } = require("../utils/reusable");

async function getCharById(req, res) {
  try {
    const { id } = req.params;
    console.log("ID recibido:", id);
    
    // Validar que el ID sea un número
    if (!id || isNaN(id)) {
      return res.status(400).json({ message: "ID inválido" });
    }

    const apiUrl = urlCharacterId(id);
    console.log("URL de la API de Rick and Morty:", apiUrl);
    
    const result = await axios.get(apiUrl);
    console.log("Respuesta de la API:", result.data);
    res.json(result.data);
  } catch (error) {
    console.error("Error detallado:", {
      error,
      message: error.message,
      response: error.response,
      status: error.response?.status,
      data: error.response?.data
    });
    
    if (error.response) {
      // Si la API de Rick and Morty responde con un error
      return res.status(error.response.status).json({
        message:
          error.response.data?.message || "Error al obtener el personaje",
      });
    }
    
    // Si hay un error en la conexión o timeout
    return res.status(500).json({
      message: "Error al conectar con la API de Rick and Morty",
    });
  }
}

module.exports = getCharById;
