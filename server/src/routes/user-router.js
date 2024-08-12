import { Router } from "express"
import User from "../models/user.model.js"
import jwt from "jsonwebtoken"
import verifyToken from "../middleware/verifyToken.js"
import mongoose from 'mongoose'
import Project from "../models/project.model.js"

const router = Router()
const secretKey = "tempSecretKey"



// 1 >> GET ALL USERS
router.get('/user', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token) {
    try {
      const decoded = jwt.verify(token, secretKey);
      const user = await User.findById(decoded._id);

      if (user) {
        res.json(user);
      } else {
        res.status(404).send('User not found');
      }
    } catch (err) {
      if (err.name === 'JsonWebTokenError') {
        res.status(401).send('Unauthorized JWT');
      } else {
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
      }
    }
  } else {
    res.status(401).json({ message: "Unauthorized Access" })
  }
})



// 2 >> USER SPECIFIC USER 
router.get('/:id', async (req, res) => {
  const userId = req.params.id
  try {
    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user)
  } catch (error) {
    res.status(505).json({ message: "Internal Server Error" })
  }
}
)

// 3 >> GET USER PROJECTS
router.get('/projects/:userId', async (req, res) => {
  const userId = req.params.userId;
  if (!mongoose.Types.ObjectId.isValid(userId)) return res.status(400).json({ message: 'Invalid user ID' });

  try {
    const projects = await Project.find({ developer: userId }).populate();
    if (projects.length === 0) return res.status(404).json({ message: 'No projects found for this user' });
    res.status(200).json(projects);
  } catch (error) {
    console.error("Error fetching user projects:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }

});



// 4 >> USER PROFILE UPDATE
router.patch('/update', verifyToken, async (req, res) => {
  const { username, fullname, summary } = req.body
  try {
    const result = await User.updateOne(
      { _id: req.user._id },
      { $set: { username, fullname, summary } }
    );
    console.log("TOKEN: ", req.user._id)
    res.status(200).json({ message: "Updated User Successfully" });
  } catch (error) {
    console.error("Error while upadating user")
    res.status(500).json({ message: "Internal apex server error 500" })
  }
})

export default router
