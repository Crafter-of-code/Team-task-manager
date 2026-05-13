import { Router } from "express";
import {
  deleteUser,
  getUsers,
  getUser,
} from "../controllers/user.controller.js";
import cookieChecker from "../middlewares/cookieChecker.js";
const userRoute = Router();
userRoute.get("/users", cookieChecker, getUsers);
userRoute.get("/user", getUser);
userRoute.delete("/user", deleteUser);
export default userRoute;
