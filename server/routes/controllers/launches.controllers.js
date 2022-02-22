const launches = require("../../models/launches.model");

function getLaunches(req, res) {
  res.json(launches);
}

function submitLaunch(req, res) {
  const { date, missionName, rocketType, destinationPlanet } = req.body;

  if (!date && !missionName && !destinationPlanet) {
    return res.status(400).json("There was no launch submitted");
  }

  launches.push({ date, missionName, rocketType, destinationPlanet });
}

function abortLaunch(req, res) {
  console.log("abort launch");
}

module.exports = {
  getLaunches,
  submitLaunch,
  abortLaunch,
};
