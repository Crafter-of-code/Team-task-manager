import mongoose, { Schema } from "mongoose";
const projectSchema = new Schema({
  projectTitle: {
    type: String,
    require: true,
  },
  projectDescription: {
    type: String,
    require: true,
  },
  teamMembers: {
    type: [],
    require: true,
  },
  createdAt: {
    type: Date,
    default: new Date.now(),
  },
});
const projectModel = mongoose.model("Projects", projectSchema);
export default projectModel;
