const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ThreatSchema = new Schema({
  monsterName: { type: String, required: true },
  dangerLevel: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
});


module.exports = mongoose.model("Threat", ThreatSchema);
