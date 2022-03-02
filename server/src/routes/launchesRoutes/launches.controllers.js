const {
  httpGetAllLaunches,
  addNewLaunch,
} = require("../../models/launches.model");
// const launchesModel = launches;

function getLaunches(req, res) {
  return res.status(200).json(httpGetAllLaunches());
}

function submitLaunch(req, res) {
  const clientLaunches = req.body;

  addNewLaunch(clientLaunches);
  return res.status(200).json("Lunch successful");
}

function abortLaunch(req, res) {
  // console.log("abort launches");
  // console.log(httpGetAllLaunches());
  // console.log("abort launches");
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
