const express = require("express");

const launchesRouter = express.Router();
const {
  getLaunches,
  submitLaunch,
  abortLaunch,
} = require("./launches.controllers");

launchesRouter.get("/", getLaunches);
launchesRouter.post("/", submitLaunch);
launchesRouter.delete("/:id", abortLaunch);

module.exports = launchesRouter;
