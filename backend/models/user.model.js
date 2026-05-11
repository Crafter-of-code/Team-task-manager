import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  userName: {
    type: String,
    require: true,
  },
  userEmail: {
    unique: true,
    type: String,
    require: true,
  },
  userPassword: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    enum: ["admin", "member"],
    default: "member",
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});
const userModel = mongoose.model("Users", userSchema);
export default userModel;
