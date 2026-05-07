import { configDotenv } from "dotenv";
configDotenv();
import express from "express";
const app = express();
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "We got your request seccessfully" });
});
app.listen(port, () => {
  console.log(`App is listening port ${port}`);
});
