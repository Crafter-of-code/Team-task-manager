import { configDotenv } from "dotenv";
configDotenv();
import express from "express";
import dbConnection from "./db/db.connection.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import cors from "cors";
import adminRoute from "./routes/admin.route.js";
const port = process.env.PORT;
dbConnection(process.env.DB_CONNECTION_STRING);
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "We got your request seccessfully" });
});
app.use(authRouter);
app.use(userRoute);
app.use(adminRoute);
app.listen(port, () => {
  console.log(`App is listening port ${port}`);
});
