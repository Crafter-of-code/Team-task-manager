import React from "react";

export type errorContextType = {
  successStatus: boolean;
  successMessage: string;
  setSuccessStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setSuccessMessage: React.Dispatch<React.SetStateAction<string>>;
  timeOut: number;
  setTimeOut: React.Dispatch<React.SetStateAction<number>>;
  toastData: (status: boolean, message: string, time: number) => void;
};
export type authContextType = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  userEmail: string;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
  userPassword: string;
  setUserPassword: React.Dispatch<React.SetStateAction<string>>;
  userConfirmPassword: string;
  setUserConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  loginHandler: () => void;
  signinHandler: () => void;
  loading: boolean;
  buttonStatus: boolean;
  checkboxValue: boolean;
  setCheckboxValue: React.Dispatch<React.SetStateAction<boolean>>;
  logoutHandler: () => void;
};
export type adminContextType = {};
export type memberContextType = {};
