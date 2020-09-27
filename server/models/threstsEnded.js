const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ThreatEndedSchema = new Schema({
  monsterName: { type: String, required: true },
  dangerLevel: { type: String, required: true },
  name: { type: String, required: true },
  rank: { type: String, required: true },
});

module.exports = mongoose.model("ThreatEnded", ThreatEndedSchema);
