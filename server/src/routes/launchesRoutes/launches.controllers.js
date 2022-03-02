const {
  httpGetAllLaunches,
  httpAddNewLaunch,
} = require("../../models/launches.model");
// const launchesModel = launches;

function getLaunches(req, res) {
  return res.status(200).json(httpGetAllLaunches());
}

function submitLaunch(req, res) {
  const launch = req.body;
  launch.launchDate = new Date(launch.launchDate);
  httpAddNewLaunch(launch);
  return res.status(201).json(launch);
}

function abortLaunch(req, res) {
  const launchId = Number(req.params.flightNumber);
  const currentLaunch = launchesModel[launchId];
  if (!currentLaunch || currentLaunch === undefined || currentLaunch === null) {
    return res.status(400).json("No launch up for deletion");
  }
  if (launchesModel === []) {
    return res.status(400).json("empty object");
  }
  launchesModel.splice(
    launchesModel.findIndex((a) => a.id === currentLaunch.id),
    1
  );
  res.status(200).json(launchesModel);
}

module.exports = {
  getLaunches,
  submitLaunch,
  abortLaunch,
};
