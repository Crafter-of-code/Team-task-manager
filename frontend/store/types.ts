import React from "react";

export type errorContextType = {
  successStatus: boolean;
  successMessage: string;
  setSuccessStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setSuccessMessage: React.Dispatch<React.SetStateAction<string>>;
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
};
export type adminContextType = {};
export type memberContextType = {};
