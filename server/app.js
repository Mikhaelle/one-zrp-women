const express = require("express");
const bodyParser = require("body-parser");
const HttpError = require("./models/http-error");
const heroesRouters = require("./routes/heroes-routes");

const app = express();

app.use(bodyParser.json());

app.use("/api/heroes", heroesRouters);

app.use((req, res, nex) => {
  const error = new HttpError("Could not find the route");
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

app.listen(5000);
