const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;
const cors = require("cors");

server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`Json server running on port ${port}`);
});
