function getLaunches(req, res) {
  res.send("get launches");
}

function submitLaunch(req, res) {
  console.log("submit launch");
}

function abortLaunch(req, res) {
  console.log("abort launch");
}

module.exports = {
  getLaunches,
  submitLaunch,
  abortLaunch,
};
