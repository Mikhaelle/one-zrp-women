const express = require("express");
//const { check } = require("express-validator");
const heroesController = require("../controllers/heroes-controller");

const router = express.Router();

router.get('/', heroesController.getHeroes);
router.get("/:hid", heroesController.getHeroById);
router.get("/rank/:rank", heroesController.getHeroByRank);
router.post("/", heroesController.createHero);
router.patch("/:hid", heroesController.updateHeroById);
router.delete("/:hid", heroesController.deleteHeroById);
module.exports = router;
