import httpService from "./services";
type loginDataType = {
  userEmail: string;
  userPassword: string;
};
type signInDateType = {
  userName: string;
  userEmail: string;
  userPassword: string;
};
export const loginService = (loginData: loginDataType) => {
  return httpService.post("/login", loginData);
};
export const signInService = (signInDate: signInDateType) => {
  return httpService.post("signin", signInDate);
};
export const logOutService = () => {
  return httpService.get("/logout");
};
