import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv();
const privateKey = process.env.JWT_PRIVATE_KEY;
const publicKey = process.env.JWT_PUBLIC_KEY;
export async function createToken(userEmail, rememberMe = false) {
  return await jwt.sign({ userEmail }, privateKey, {
    algorithm: "ES256",
    expiresIn: rememberMe ? "7d" : "10h",
  });
}
export async function verfiyToken(token) {
  return (tokenVerifyReponse = jwt.verify(token, publicKey));
}
