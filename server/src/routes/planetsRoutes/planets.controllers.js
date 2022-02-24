const planetsModel = require("../../models/planets.model");

function getPlanets(req, res) {
  return res.status(200).json(planetsModel);
}

module.exports = {
  getPlanets,
};
