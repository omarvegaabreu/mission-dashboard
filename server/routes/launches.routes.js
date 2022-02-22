const express = require("express");

const launchesRouter = express.Router();
const {
  getLaunches,
  submitLaunch,
  abortLaunch,
} = require("./controllers/launches.controllers");

launchesRouter.get("/", getLaunches);
launchesRouter.post("/:id", submitLaunch);
launchesRouter.delete("/:id", abortLaunch);

module.exports = launchesRouter;
