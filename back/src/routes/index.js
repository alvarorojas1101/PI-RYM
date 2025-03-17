const router = require("express").Router();
const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
const getCharById = require("../controllers/getCharById");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");

router.get("/character/:id", getCharById);
router.post("/login", login);
router.post("/register", postUser);

router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
