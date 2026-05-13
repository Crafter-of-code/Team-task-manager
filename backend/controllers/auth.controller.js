import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import { createToken } from "../utility/tokens.js";
export async function loginController(req, res) {
  const { userEmail, userPassword } = req.body;
  const user = await userModel.findOne({ userEmail });
  const token = jwt.sign;
  if (user) {
    const { rememberMe } = req.body;
    if (rememberMe) {
      res.cookie("_em", await createToken(userEmail), {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24,
      });
      res.cookie("_role", user.role, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24,
      });
    } else {
      res.cookie("_em", await createToken(userEmail), {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      });
      res.cookie("_role", user.role, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      });
    }
    return res.status(200).json({
      success: true,
      message: "user login successfully",
      role: user.role,
    });
  } else {
    console.log("can't login");
    return res.status(404).json({
      success: false,
      message: "user not found",
    });
  }
}

export async function signinController(req, res) {
  try {
    const data = { ...req.body };
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(data.userPassword, salt);
    if (hash) {
      data.userPassword = hash;
    }
    const user = userModel(data);
    const response = await user.save();
    if (response) {
      return res.status(200).json({
        success: true,
        message: "Account created succesfully",
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "We are facing some Problem. while saving",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "we are facing some problem in the database",
    });
  }
}
export async function logOutController(req, res) {
  const cookies = req.cookies;
  for (const cookieName in cookies) {
    res.clearCookie(cookieName, {
      path: "/",
    });
  }
  res
    .status(200)
    .json({ success: true, message: "you are successfully loged out" });
}
