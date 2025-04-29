const router = require("express").Router();
const getCharById = require("../controllers/getCharById");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");

router.get("/character/:id", getCharById);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
