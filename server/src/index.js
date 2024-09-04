import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDb from "./config/database.js";
import ProjectRouter from "./routes/project-router.js";
import AuthenticatorRouter from "./routes/auth-router.js";
import UserRouter from "./routes/user-router.js";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: process.env.CLIENT_URL
}));


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

