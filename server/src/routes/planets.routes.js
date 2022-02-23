const express = require("express");

const { getPlanets } = require("./controllers/planets.controllers");
const planetsRouter = express.Router();

planetsRouter.get("/", getPlanets);

module.exports = planetsRouter;
