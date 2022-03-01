const path = require("path");

const { parse } = require("csv-parse");
const fs = require("fs");

const results = [];

function isHabitable(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

function loadPlanetsData() {
  return new Promise((resolve, rejects) => {
    fs.createReadStream(path.join(__dirname, "../data/kepler_data.csv"))
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (isHabitable(data)) {
          results.push(data);
        }
      })
      .on("error", (error) => {
        console.log(error);
        rejects(error);
      })
      .on("end", () => {
        console.log(results.map((result) => result["kepler_name"]));
        resolve();
        // console.log(`There are ${results.length} habitable planets`);
      });
  });
}

function getAllPlanets() {
  return results;
}

module.exports = {
  loadPlanetsData,
  getAllPlanets,
};
