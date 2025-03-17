require("dotenv").config();
const { Sequelize } = require("sequelize");
const { UserModel, FavoriteModel } = require("./models/index");

// Conexión a la base de datos usando DATABASE_URL de Railway
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

// Definición de modelos
UserModel(sequelize);
FavoriteModel(sequelize);

// Relaciones entre modelos
const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: "user_favorite" });
Favorite.belongsToMany(User, { through: "user_favorite" });

module.exports = {
  conn: sequelize,
  User,
  Favorite,
};
