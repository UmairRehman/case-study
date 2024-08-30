const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json")); // Adjust the path to your db.json file
const middlewares = jsonServer.defaults();

// Apply CORS middleware
server.use(cors());

// Add default middlewares (logger, static, and no-cache)
server.use(middlewares);

// Use the router
server.use("/api", router); // You can change '/api' to whatever endpoint you prefer

// Start the server
server.listen(3001, () => {
  console.log("JSON Server is running on http://localhost:3001");
});
