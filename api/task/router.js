// build your `/api/tasks` router here
const Tasks = require("./model.js");
const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  Projects.get(req.query)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(next)
});

router.post("/", (req, res, next) => {
  Tasks.insert(req.body)
    .then(tasks => {
      res.status(201).json(tasks);
    })
    .catch(next)
});

router.use((err, req, res, next) => {
  res.status(500).json({
    message: "There is a server issue.",
    error: err.message
  })
});

module.exports = router;