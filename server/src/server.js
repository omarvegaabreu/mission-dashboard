const http = require("http");

const PORT = process.env.PORT || 8000;
const app = require("./app");
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is listening on PORT:${PORT}`);
});

// const express = require("express");

// const app = express();
// const port = 5000;
// const launchesRouter = require("../routes/launches.routes");
// const planetsRouter = require("../routes/planets.routes");

// app.use((req, res, next) => {
//   const start = Date.now();
//   next();
//   const delta = Date.now() - start;
//   // console.log(`${req.method}${req.baseUrl}${req.url} request time:${delta}ms`);
//   console.log(`${req.method}${req.url} request time:${delta}ms`);
// });

// app.use(express.json());
// app.use("/launches", launchesRouter);

// app.use("/planets", planetsRouter);

// app.listen(port, () => {
//   console.log(`App is listening on ${port}`);
// });
