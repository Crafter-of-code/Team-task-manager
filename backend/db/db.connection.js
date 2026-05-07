import { configDotenv } from "dotenv";
configDotenv();
import mongoose from "mongoose";
const connectionString = process.env.DB_CONNECTION_STRING;
export default function dbConnection() {
  try {
    mongoose.connect(connectionString).then(() => {
      console.log("database connected succesfully");
    });
  } catch (e) {
    console.log(e);
  }
}
