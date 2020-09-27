const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const ThreatEndedSchema = new Schema({
  name: { type: String, required: true },
  rank: { type: String, required: true},
  allocate: { type: Boolean, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('ThreatEnded', ThreatEndedSchema);