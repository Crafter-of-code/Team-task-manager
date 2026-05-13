import { Router } from "express";
import {
  loginController,
  logOutController,
  signinController,
} from "../controllers/auth.controller.js";
import {
  loginBodyChecker,
  signinBodyChecker,
} from "../middlewares/authBodyChecker.js";
const authRouter = Router();
authRouter.post("/login", loginBodyChecker, loginController);
authRouter.post("/signin", signinBodyChecker, signinController);
authRouter.get("/logout", logOutController);
export default authRouter;
