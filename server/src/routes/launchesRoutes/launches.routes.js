const express = require("express");

const launchesRouter = express.Router();
const {
  getLaunches,
  submitLaunch,
  abortLaunch,
} = require("./launches.controllers");

launchesRouter.get("/launches", getLaunches);
// launchesRouter.post("/launches", submitLaunch);
// launchesRouter.delete("/launches/:id", abortLaunch);

module.exports = launchesRouter;
