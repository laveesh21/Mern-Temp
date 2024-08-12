import { Router } from "express";
import Project from "../models/project.model.js";
import verifyToken from "../middleware/verifyToken.js";

const router = Router();


// GET REQUEST : FOR PROJECTS
router.get(`/`, async (req, res) => {
  try {
    const data = await Project.find({});
    res.status(201).json(data);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


// GET REQUEST : FOR A SINGLE PROJECT
router.get('/:projectId', (req, res) => {
  const id = req.params.projectId;
  console.log("ID: ", id);

  Project.findById(id)
    .populate('developer', 'username') // Populate the developer field with the username
    .then((data) => {
      if (!data) {
        return res.status(404).json({ error: "Project Does Not Exist" });
      }
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: `NODEJS: Internal Server Error: ${error}` });
    });
});

//  POST REQUEST : PROJECT UPLOAD
router.post(`/upload`, verifyToken, async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const savedProject = await newProject.save();
    res.status(200).json(savedProject);
  } catch (error) {
    console.error("NODEJS => Error adding project:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
