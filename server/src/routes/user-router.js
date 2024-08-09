import { Router } from "express"
import User from "../models/user.model.js"
import jwt from "jsonwebtoken"

const router = Router()
const secretKey = "tempSecretKey"
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

router.patch('/update/:id', async (req, res) => {
  const userId = req.params.id;
  const updatedUserData = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const keysToUpdate = Object.keys(updatedUserData).filter(key => {
      return updatedUserData[key] !== user[key];
    });

    keysToUpdate.forEach(key => {
      user[key] = updatedUserData[key];
    });
    const updatedUser = await user.save();

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router
