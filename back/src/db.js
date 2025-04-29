// Simulación simple de almacenamiento de datos
const data = {
  favorites: new Map(), // Almacenar favoritos por usuario
};

// Inicializar con un usuario por defecto
const defaultUserId = "default_user";
data.favorites.set(defaultUserId, []);

module.exports = {
  data
};
