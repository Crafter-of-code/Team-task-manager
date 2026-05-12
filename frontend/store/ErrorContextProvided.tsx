import React from "react";
import { errorContextType } from "./types";

export const errorContext = React.createContext<errorContextType>({
  successStatus: false,
  successMessage: "",
  setSuccessStatus: () => {},
  setSuccessMessage: () => {},
});
export default function ErrorContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [successStatus, setSuccessStatus] = React.useState<boolean>(false);
  const [successMessage, setSuccessMessage] = React.useState<string>("");
  return (
    <>
      <errorContext.Provider
        value={{
          successStatus,
          setSuccessStatus,
          successMessage,
          setSuccessMessage,
        }}
      >
        {children}
      </errorContext.Provider>
    </>
  );
}
