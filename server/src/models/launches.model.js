const launchesModel = new Map();
let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "omar alejandro",
  rocket: "Explorer IS1",
  launchDate: new Date("December 24,2011"),
  customer: ["NASA", "SPACE X"],
  upcoming: true,
  success: true,
};

launchesModel.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launchesModel.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launchesModel.set(
    latestFlightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      customer: ["NASA", "SPACE X"],
      upcoming: true,
      success: true,
    })
  );
}

function existLaunchWithId(launchId) {
  return launch.has(launchId);
}

function abortLaunchById(launchId) {
  const aborted = launch.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
  existLaunchWithId,
  abortLaunchById,
};
