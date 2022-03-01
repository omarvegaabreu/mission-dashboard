const launchesModel = new Map();

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

function httpGetAllLaunches() {
  return Array.from(launchesModel.values());
}

module.exports = {
  httpGetAllLaunches,
};
