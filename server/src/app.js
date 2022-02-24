const express = require("express");

const app = express();
const cors = require("cors");
const launchesRouter = require("./routes/launchesRoutes/launches.routes");
const planetsRouter = require("./routes/planetsRoutes/planets.routes");

app.use(cors({ origin: "http://localhost:3000" }));

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  // console.log(`${req.method}${req.baseUrl}${req.url} request time:${delta}ms`);
  console.log(`${req.method}${req.url} request time:${delta}ms`);
});

app.use(express.json());
app.use(launchesRouter);
app.use(planetsRouter);

module.exports = app;
