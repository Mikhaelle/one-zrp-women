const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HeroSchema = new Schema({
  name: { type: String, required: true },
  rank: { type: String, required: true },
  img: { type: String },
  allocate: { type: Boolean, required: true },
});

module.exports = mongoose.model("Heroes", HeroSchema);
