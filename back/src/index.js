require("dotenv").config();
const { PORT } = process.env; // Eliminamos HOST
const server = require("./server");
const { conn } = require("./db");

// Sincronizar la base de datos y arrancar el servidor
conn
  .sync({ force: false }) // CAMBIA A false EN PRODUCCIÓN
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
