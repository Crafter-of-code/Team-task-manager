import { Router } from "express";
import adminCookieChecker from "../middlewares/adminCookieChecker.js";
import cookieChecker from "../middlewares/cookieChecker.js";
import { getAllProjects } from "../controllers/project.controller.js";
const adminRoute = Router();
adminRoute.get("/projects", cookieChecker, getAllProjects);
export default adminRoute;
