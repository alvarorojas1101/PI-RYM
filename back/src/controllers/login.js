const { User } = require("../db");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Faltan datos" });

    const user = await User.findOne({ where: { email } });
    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });
    if (user.password !== password)
      return res.status(403).json({ message: "Contraseña incorrecta" });

    res.json({ access: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = login;
