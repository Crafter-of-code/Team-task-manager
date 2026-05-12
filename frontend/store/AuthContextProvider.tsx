import React from "react";
import { authContextType } from "./types";
import httpService from "@/services/services";
import { loginService, signInService } from "@/services/authService";
const authContext = React.createContext<authContextType>({
  userName: "",
  setUserName: () => {},
  userEmail: "",
  setUserEmail: () => {},
  userPassword: "",
  setUserPassword: () => {},
  userConfirmPassword: "",
  setUserConfirmPassword: () => {},
});
function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [userName, setUserName] = React.useState<string>("");
  const [userEmail, setUserEmail] = React.useState<string>("");
  const [userPassword, setUserPassword] = React.useState<string>("");
  const [userConfirmPassword, setUserConfirmPassword] =
    React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [buttonStatus, setButtonStatus] = React.useState<boolean>(false);
  function loginHandler() {
    console.log("login handler");
    // loginService;
  }
  function signinHandler() {
    console.log("signin handler");
    // signInService
  }
  return (
    <authContext.Provider
      value={{
        userName,
        setUserName,
        userEmail,
        setUserEmail,
        userPassword,
        setUserPassword,
        userConfirmPassword,
        setUserConfirmPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export default AuthContextProvider;
