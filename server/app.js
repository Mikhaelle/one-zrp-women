const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const HttpError = require("./models/http-error");
const heroesRouters = require("./routes/heroes-routes");
const threatsRouters = require("./routes/threats-routes");
const threatsEndRouters = require("./routes/threatsEnd-routes");

const app = express();

app.use(bodyParser.json());

app.use("/api/heroes", heroesRouters);
app.use("/api/threats", threatsRouters);
app.use("/api/threatsEnd", threatsEndRouters);

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

mongoose
  .connect(
    "mongodb+srv://mikha:1234509876@cluster0.jmvet.mongodb.net/heroes?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log("error");
  });
