// build your `/api/projects` router here
const Projects = require("./model.js");
const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  Projects.get(req.query)
  .then(projects=> {
    res.status(200).json(projects);
  })
  .catch(next)
})

router.get("/:id", (req, res, next) => {
  Projects.getById(req.params.id)
    .then(projects => {
      if (projects) {
        res.status(200).json(projects);
      } else {
        res.status(404).json({ message: "Project not found." });
    }
  })
    .catch(next)
})

// router.put("/:id", (req, res, next) => {
//   Projects.update(req.params.id, req.body)
//     .then(projects => {
//       if (projects) {
//         res.status(200).json(projects);
//       } else {
//         res.status(404).json({ message: "Project not found." });
//       }
//     })
//    .catch(next)
// })

// router.delete("/:id", (req, res, next) => {
//   Projects.remove(req.params.id)
//     .then(projects => {
//       if (count > 0) {
//         res.status(200).json({ message: 'The project has been removed' });
//       } else {
//         res.status(404).json({ message: 'The project could not be found' });
//       }
//     })
//   .catch(next)
// })

router.post("/", (req, res, next) => {
  Projects.insert(req.body)
  .then(projects=> {
    res.status(201).json(projects);
  })
  .catch(next)
})

// router.use((err,req,res,next)=>{
//   res.status(500).json({
//     message: "There is a server issue.",
//     error:err.message
//   })
// })

module.exports = router;
