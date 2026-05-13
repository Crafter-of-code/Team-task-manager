import React from "react";
import { authContextType } from "./types";
import {
  loginService,
  logOutService,
  signInService,
} from "@/services/authService";
import { errorContext } from "./ErrorContextProvided";
import { redirect, usePathname } from "next/navigation";
export const authContext = React.createContext<authContextType>({
  userName: "",
  setUserName: () => {},
  userEmail: "",
  setUserEmail: () => {},
  userPassword: "",
  setUserPassword: () => {},
  userConfirmPassword: "",
  setUserConfirmPassword: () => {},
  loginHandler: () => {},
  signinHandler: () => {},
  buttonStatus: false,
  loading: false,
  checkboxValue: false,
  setCheckboxValue: () => {},
  logoutHandler: () => {},
});
function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  {
    /* member user name */
    /*uzair@google.com 1234*/
    /* admin user name */
    /* admin@123, admin */
  }

  const { toastData } = React.useContext(errorContext);
  const [userName, setUserName] = React.useState<string>("");
  const [userEmail, setUserEmail] = React.useState<string>("uzair@google.com");
  const [userPassword, setUserPassword] = React.useState<string>("1234");
  const [userConfirmPassword, setUserConfirmPassword] =
    React.useState<string>("admin");
  const [checkboxValue, setCheckboxValue] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [buttonStatus, setButtonStatus] = React.useState<boolean>(false);
  async function loginHandler() {
    const data = {
      userEmail,
      userPassword,
      rememberMe: checkboxValue ? true : false,
    };
    let result;
    try {
      result = (await loginService(data)).data;
      toastData(result.success, result.message, 2000);
    } catch (err: any) {
      result = err.response.data;
      toastData(result.success, result.message, 4000);
    } finally {
      console.log(result);
    }
    setCheckboxValue(false);
    setUserEmail("");
    setUserPassword("");
    if (result.role == "admin") {
      redirect("/admin");
    } else {
      redirect("/home");
    }
  }
  async function signinHandler() {
    if (
      userName == "" ||
      userEmail == "" ||
      userPassword == "" ||
      userConfirmPassword == ""
    ) {
      return toastData(false, "fill all the required fields", 3000);
    } else {
      if (checkboxValue == true) {
        if (userPassword == userConfirmPassword) {
          const data = {
            userName,
            userEmail,
            userPassword,
          };
          let result;
          try {
            result = (await signInService(data)).data;
          } catch (err: any) {
            if (err.resposne?.data) {
              result = err.response.data;
            } else {
              result = undefined;
            }
          }
          if (result != undefined) {
            if (result.success) {
              toastData(true, result.message, 2000);
              redirect("/login");
            } else {
              toastData(false, result.message, 2000);
            }
          } else {
            toastData(
              false,
              "Faceing some problem while connectinig to the server",
              5000
            );
          }
        } else {
          toastData(
            false,
            "Your Passwording is not matching with the confirm password",
            2000
          );
        }
      } else {
        toastData(false, "please check the concern box", 2000);
      }
    }
  }
  async function logoutHandler() {
    let result;
    try {
      result = (await logOutService()).data;
    } catch (err) {
      result = (await logOutService()).request;
    }
    if (result.success) {
      redirect("/");
    }
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
        loginHandler,
        signinHandler,
        buttonStatus,
        loading,
        checkboxValue,
        setCheckboxValue,
        logoutHandler,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export default AuthContextProvider;
