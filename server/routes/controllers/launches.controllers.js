const launches = require("../../models/launches.model");

function getLaunches(req, res) {
  res.send(launches);
}

function submitLaunch(req, res) {
  const launch = {
    date: req.body.date,
    missionName: req.body.missionName,
    rocketType: req.body.rocketType,
    destinationPlanet: req.body.destinationPlanet,
  };
  console.log(launch);
}

function abortLaunch(req, res) {
  console.log("abort launch");
}

module.exports = {
  getLaunches,
  submitLaunch,
  abortLaunch,
};
