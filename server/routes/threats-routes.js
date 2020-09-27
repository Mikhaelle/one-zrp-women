const express = require("express");
//const { check } = require("express-validator");
const threatsController = require("../controllers/threats-controller");

const router = express.Router();

router.get("/", threatsController.getThreats);
router.get("/:tid", threatsController.getThreatsById);
router.post("/", threatsController.createThreats);
router.delete("/:tid", threatsController.deleteThreatsById);
module.exports = router;
