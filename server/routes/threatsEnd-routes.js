const express = require("express");
//const { check } = require("express-validator");
const threatsEndController = require("../controllers/threatsEnd-controller.js");

const router = express.Router();

router.get("/", threatsEndController.getThreats);
router.post("/", threatsEndController.createThreats);
module.exports = router;
