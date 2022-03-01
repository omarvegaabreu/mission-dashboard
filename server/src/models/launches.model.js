// const { getLaunches } = require("../routes/controllers/launches.controllers");

// const customer = ["NASA", "SPACE X"];

const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "omar alejandro",
  rocket: "Explorer IS1",
  launchDate: new Date("December 24,2011"),
  customer: ["NASA", "SPACE X"],
  upcoming: true,
  success: true,
};

// const launch = [
//   {
//     flightNumber: 100,
//     mission: "omar alejandro",
//     ROCKET,
//     launchDate: new Date("December 24,2011"),
//     customer,
//     upcoming: true,
//     success: true,
//   },
//   {
//     flightNumber: 101,
//     launchDate: new Date("January 24,2030"),
//     mission: "alejandro",
//     ROCKET,
//     customer,
//     upcoming: true,
//     success: true,
//   },
//   {
//     flightNumber: 102,
//     mission: "Abigail Cristina",
//     ROCKET,
//     launchDate: new Date("March 19,2016"),
//     customer,
//     upcoming: true,
//     success: true,
//   },
// ];

launches.set(launch.flightNumber, launch);

module.exports = {
  launches,
};
