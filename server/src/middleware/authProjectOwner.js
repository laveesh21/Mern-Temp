import Project from "../models/project.model.js"

const authProjectOwner = async (req, res, next) => {

  try {

    const projectId = req.params.projectId
    const project = await Project.findById(projectId)

    if (!project) {
      return res.status(404).json({ message: "Project Not Found" })
    }

    if (project.developer.toString() !== req.user._id) {
      return res.status(403).json({ message: "You are not authorized to update this project" })
    }

    next()

  } catch (error) {
    res.status(500).json({ message: "Server Error" })
  }

}

export default authProjectOwner
