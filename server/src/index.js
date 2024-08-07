import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDb from "./config/database.js";
import ProjectRouter from "./routes/project-router.js";
import AuthenticatorRouter from "./routes/auth-router.js";
import UserRouter from "./routes/user-router.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());


// Routers to be used by app
app.use("/project", ProjectRouter);
app.use("/user", AuthenticatorRouter);
app.use("/profile", UserRouter);


// Server Listening on PORT
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening at port: ${PORT}`);
  });
});

