import mongoose from "mongoose";
export default async function dbConnection(connectionString) {
  try {
    await mongoose.connect(connectionString).then(() => {
      console.log("database connected succesfully");
    });
  } catch (e) {
    console.log(e);
  }
}
