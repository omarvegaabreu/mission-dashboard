const http = require("http");

const PORT = process.env.PORT || 8000;
const app = require("./app");
const cors = require("cors");
const server = http.createServer(app);

app.use(cors());

server.listen(PORT, () => {
  console.log(`Server is listening on PORT:${PORT}`);
});
