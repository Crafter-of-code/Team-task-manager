import mongoose, { Schema } from "mongoose";

const taskSchema = Schema.create({
  projectId: {
    type: String,
    require: true,
  },
  taskTitle: {
    type: String,
    require: true,
  },
  taskDescription: {
    type: String,
    require: true,
  },
  priority: {
    type: String,
    enum: ["high", "medium", "low"],
    defaul: "medium",
  },
  taskDueDate: {
    type: Date,
    require: true,
  },
});
const taskModel = mongoose.model("Tasks", taskSchema);
export default taskModel;
