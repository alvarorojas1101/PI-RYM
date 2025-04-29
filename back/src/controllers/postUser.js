// Simulación simple de usuarios
const users = new Map();

const postUser = (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ message: "Faltan datos" });
  }

  if (users.has(email)) {
    return res.status(409).json({ message: "El usuario ya existe" });
  }

  const newUser = { email, password };
  users.set(email, newUser);
  res.status(201).json({ user: newUser });
};

module.exports = postUser;
