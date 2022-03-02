const { getAllLaunches, addNewLaunch } = require("../../models/launches.model");
// const launchesModel = launches;

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;
  launch.launchDate = new Date(launch.launchDate);
  addNewLaunch(launch);
  return res.status(201).json(launch);
}

function httpDeleteLaunch(req, res) {
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
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpDeleteLaunch,
};
