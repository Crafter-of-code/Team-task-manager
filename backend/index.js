import { configDotenv } from "dotenv";
configDotenv();
import express from "express";
import dbConnection from "./db/db.connection.js";
const port = process.env.PORT;
const app = express();
dbConnection();
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "We got your request seccessfully" });
});
app.listen(port, () => {
  console.log(`App is listening port ${port}`);
});
