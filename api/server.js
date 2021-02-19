// build your server here and require it from index.js
const express = require("express");

const ModelRouter = require("./project/router.js");
const ResourceRouter = require("./project/router.js");
const TaskRouter = require("./project/router.js");

const server = express();

server.use(express.json());
server.use("/api/project", ModelRouter);
server.use("/api/resource", ResourceRouter);
server.use("/api/task", TaskRouter);

module.exports = server;