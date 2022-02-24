const launchesModel = require("../../models/launches.model");

function getLaunches(req, res) {
  console.log(launchesModel);
  if (!launchesModel) {
    return res.status(400).json("There are no scheduled launches");
  }
  res.status(200).json(launchesModel);
}

function submitLaunch(req, res) {
  const { id, date, missionName, rocketType, destinationPlanet } = req.body;

  if (!date && !missionName && !destinationPlanet) {
    return res
      .status(400)
      .json("You did not submit a launch, please try again");
  }

  launchesModel.push({
    id: launchesModel.length,
    date,
    missionName,
    rocketType,
    destinationPlanet,
  });
}

function abortLaunch(req, res) {
  const launchId = Number(req.params.id);
  const currentLaunch = launchesModel[launchId];
  // console.log(launchesModel);
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
