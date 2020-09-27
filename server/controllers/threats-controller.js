const HttpError = require("../models/http-error");
const { v4: uuidv4 } = require("uuid");

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

const getThreats = (req, res, next) => {
  res.json({ THREATS });
};

const getThreatsById = (req, res, next) => {
  const threatsId = req.params.tid;
  const threats = THREATS.find((p) => {
    return p.id === threatsId;
  });
  if (!threats) {
    throw new HttpError("Hero not found!");
  }
  res.json({ threats });
};

const createThreats = (req, res, next) => {
  const { monsterName, dangerLevel, location } = req.body;

  const createdThreats = {
    id: uuidv4(),
    monsterName,
    dangerLevel,
    location,
  };

  THREATS.push(createdThreats);
  res.status(201).json({ threats: createdThreats });
};

const deleteThreatsById = (req, res, next) => {
  const threatsId = req.params.Tid;
  THREATS = THREATS.filter((p) => p.id !== threatsId);
  res.status(200).json({ message: "Deleted threats" });
};

exports.getThreats = getThreats;
exports.getThreatsById = getThreatsById;
exports.createThreats = createThreats;
exports.deleteThreatsById = deleteThreatsById;
