// build your `/api/resources` router here
const Resources = require("./model.js");
const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  Resources.get(req.query)
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(next)
});

router.post("/", (req, res, next) => {
  Resources.insert(req.body)
    .then(resources => {
      res.status(201).json(resources);
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