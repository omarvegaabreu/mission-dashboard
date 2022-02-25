const express = require("express");

const app = express();
const cors = require("cors");
const path = require("path");
const logger = require("morgan");
const launchesRouter = require("./routes/launchesRoutes/launches.routes");
const planetsRouter = require("./routes/planetsRoutes/planets.routes");

app.use(cors({ origin: "http://localhost:3000" }));

app.use(logger("dev"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(launchesRouter);
app.use(planetsRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
