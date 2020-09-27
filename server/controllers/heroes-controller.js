const HttpError = require("../models/http-error");
const { v4: uuidv4 } = require("uuid");

let HEROES = [
  {
    id: "h1",
    name: "Saitama",
    rank: "B",
    img: "https://miro.medium.com/max/5760/1*2bjwCLaA8TfH40OXcyLNvA.png",
    allocated: false,
  },
  {
    id: "h2",
    name: "Genos",
    rank: "S",
    img:
      "https://vignette.wikia.nocookie.net/onepunchman/images/8/84/Genos_Anime_portrait.png/revision/latest?cb=20190928203642",
    allocated: false,
  },
  {
    id: "h3",
    name: "Amai Mask",
    rank: "A",
    img:
      "https://vignette.wikia.nocookie.net/onepunchman/images/f/fc/SweetMaskProfile.png/revision/latest?cb=20191130211509",

    allocated: false,
  },
];

const getHeroes = (req, res, next) => {
  const heroes = HEROES;
  res.json({ heroes });
};

const getHeroById = (req, res, next) => {
  const heroId = req.params.hid;
  const hero = HEROES.find((p) => {
    return p.id === heroId;
  });
  if (!hero) {
    throw new HttpError("Hero not found!");
  }
  res.json({ hero });
};

const getHeroByRank = (req, res, next) => {
  const heroRank = req.params.rank;
  const hero = HEROES.find((p) => {
    return p.rank === heroRank;
  });

  if (!hero) {
    throw new HttpError("Hero not found!");
  }

  console.log("Get Request");
  res.json({ hero });
};

const createHero = (req, res, next) => {
  const { name, rank } = req.body;

  const createdHero = {
    id: uuidv4(),
    name,
    rank,
    img: null,
    allocated: false,
  };

  HEROES.push(createHero);
  res.status(201).json({ hero: createdHero });
};

const updateHeroById = (req, res, next) => {
  const { name, rank, allocated } = req.body;
  const heroId = req.params.hid;

  const updateHero = { ...HEROES.find((p) => p.id === heroId) };
  const heroIndex = HEROES.findIndex((p) => p.id === heroId);
  updateHero.name = name;
  (updateHero.rank = rank), (updateHero.allocated = allocated);

  HEROES[heroIndex] = updateHero;

  res.status(200).json({ hero: updateHero });
};

const deleteHeroById = (req, res, next) => {
  const heroId = req.params.hid;
  HEROES = HEROES.filter((p) => p.id !== heroId);
  res.status(200).json({ message: "Deleted Hero" });
};

exports.getHeroes = getHeroes;
exports.getHeroById = getHeroById;
exports.getHeroByRank = getHeroByRank;
exports.createHero = createHero;
exports.deleteHeroById = deleteHeroById;
exports.updateHeroById = updateHeroById;
