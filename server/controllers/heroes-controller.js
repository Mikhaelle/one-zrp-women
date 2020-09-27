const HttpError = require("../models/http-error");
const Heroes = require("../models/heroes");
const { validationResult } = require("express-validator");

const getHeroes = (req, res, next) => {
  const heroes = HEROES;
  res.json({ heroes });
};

const getHeroById = async (req, res, next) => {
  const heroId = req.params.hid;
  let hero;
  try {
    hero = await Heroes.findById(heroId);
  } catch (err) {
    const error = new HttpError("somethin went wrong", 500);
    return next(error);
  }
  if (!hero) {
    const error = new HttpError("Hero not found!", 400);
    return next(error);
  }
  res.json({ hero: hero.toObject({ getters: true }) });
};

const getHeroByRank = async (req, res, next) => {
  const heroRank = req.params.r;

  let heroes;
  try {
    heroes = await Heroes.find({ rank: heroRank });
    console.log(heroes);
  } catch (err) {
    const error = new HttpError("somethin went wrong", 500);
    return next(error);
  }

  if (!heroes || heroes.length === 0) {
    return next(new HttpError("Hero not found!", 404));
  }

  res.json({ heroes: heroes.map((hero) => hero.toObject({ getters: true })) });
};

const createHero = async (req, res, next) => {
  const { name, rank, img, allocate } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const createdHero = new Heroes({
    name,
    rank,
    img,
    allocate,
  });

  try {
    await createdHero.save();
  } catch (err) {
    const error = new HttpError("creating hero failed", 500);
    return next(error);
  }
  res.status(201).json({ hero: createdHero });
};

const updateHeroById = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs passed, please check your data.", 422);
  }
  const { name, rank, img, allocate } = req.body;
  const heroId = req.params.hid;

  let hero;
  try {
    hero = await Heroes.findById(heroId);
  } catch (err) {
    const error = new HttpError("creating hero failed", 500);
    return next(error);
  }

  (hero.name = name),
    (hero.rank = rank),
    (hero.allocate = allocate),
    (hero.img = img);

  try {
    await hero.save();
  } catch (error) {
    new HttpError("creating hero failed", 500);
    return next(error);
  }

  res.status(200).json({ hero: hero.toObject({ getters: true }) });
};

const deleteHeroById = async (req, res, next) => {
  const heroId = req.params.hid;
  let hero;
  try {
    hero = await Heroes.findById(heroId);
  } catch (err) {
    const error = new HttpError("creating hero failed", 500);
    return next(error);
  }

  try {
    await hero.remove();
  } catch (error) {
    new HttpError("Delete hero failed", 500);
    return next(error);
  }
  res.status(200).json({ message: "Deleted Hero" });
};

exports.getHeroes = getHeroes;
exports.getHeroById = getHeroById;
exports.getHeroByRank = getHeroByRank;
exports.createHero = createHero;
exports.deleteHeroById = deleteHeroById;
exports.updateHeroById = updateHeroById;
