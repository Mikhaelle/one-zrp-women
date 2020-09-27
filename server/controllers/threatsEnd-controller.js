const HttpError = require("../models/http-error");
const { v4: uuidv4 } = require("uuid");

let THREATSENDED = [
  {
    id: "td1",
    monsterName: "Black Dragon",
    dangerLevel: "Dragon",
    heroName: "Saitama",
    heroRank: "S",
  },
];

const getThreats = (req, res, next) => {
  res.json({ THREATSENDED });
};

const createThreats = (req, res, next) => {
  const { monsterName, dangerLevel, heroName, heroRank } = req.body;

  const createdThreats = {
    id: uuidv4(),
    monsterName,
    dangerLevel,
    heroName,
    heroRank,
  };

  THREATS.push(createdThreats);
  res.status(201).json({ threats: createdThreats });
};

exports.getThreats = getThreats;
exports.createThreats = createThreats;
