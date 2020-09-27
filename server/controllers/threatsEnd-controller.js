const HttpError = require("../models/http-error");
const ThreatsEnd = require("../models/threstsEnded");

const getThreats = async (req, res, next) => {
  let threats;
  try {
    threats = await ThreatsEnd.find({}, "-password");
  } catch (err) {
    const error = new HttpError("somethin went wrong", 500);
    return next(error);
  }

  res.json({
    threats: threats.map((threat) => threatS.toObject({ getters: true })),
  });
};

const createThreats = async (req, res, next) => {
  const { monsterName, dangerLevel, name, rank } = req.body;

  const createdThreat = new ThreatsEnd({
    monsterName,
    dangerLevel,
    name,
    rank,
  });

  try {
    await createdThreat.save();
  } catch (err) {
    const error = new HttpError("creating Threat failed", 500);
    return next(error);
  }
  res.status(201).json({ Threat: createdThreat });
};

exports.getThreats = getThreats;
exports.createThreats = createThreats;
