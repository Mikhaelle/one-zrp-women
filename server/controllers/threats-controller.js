const HttpError = require("../models/http-error");
const Threats = require("../models/threats");
const { validationResult } = require("express-validator");

let THREATS = [
  {
    id: "t1",
    monsterName: "Black Dragon",
    dangerLevel: "Dragon",
    location: {
      lat: -5.836597,
      lng: -35.236007,
    },
  },
  {
    id: "t2",
    monsterName: "Black Dragon",
    dangerLevel: "Dragon",
    location: {
      lat: -5.836597,
      lng: -35.236007,
    },
  },
];

const getThreats = async (req, res, next) => {
    let threats;
  try {
    threats = await Threats.find({}, "-password");
  } catch (err) {
    const error = new HttpError("somethin went wrong", 500);
    return next(error);
  }

  res.json({ threats: threats.map((threat) => threatS.toObject({ getters: true })) });
};

const getThreatsById = async(req, res, next) => {

    const threatsId = req.params.tid;
    let threats;
    try {
        threats = await Threats.findById(threatsId);
    } catch (err) {
      const error = new HttpError("somethin went wrong", 500);
      return next(error);
    }
    if (!threats) {
      const error = new HttpError("threats not found!", 400);
      return next(error);
    }
    res.json({ threats: threats.toObject({ getters: true }) });

};

const createThreats = async (req, res, next) => {
  const { monsterName, dangerLevel, location } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const createdThreat = new Threats({
    monsterName,
    dangerLevel,
    location,
  });

  try {
    await createdThreat.save();
  } catch (err) {
    const error = new HttpError("creating Threat failed", 500);
    return next(error);
  }
  res.status(201).json({ Threat: createdThreat });
};

const deleteThreatsById = async (req, res, next) => {
    const threatsId = req.params.tid;
  let threat;
  try {
    threat = await Threats.findById(threatsId);
  } catch (err) {
    const error = new HttpError("creating hero failed", 500);
    return next(error);
  }

  try {
    await threat.remove();
  } catch (error) {
    new HttpError("Delete hero failed", 500);
    return next(error);
  }
  res.status(200).json({ message: "Deleted threat" });
};

exports.getThreats = getThreats;
exports.getThreatsById = getThreatsById;
exports.createThreats = createThreats;
exports.deleteThreatsById = deleteThreatsById;
