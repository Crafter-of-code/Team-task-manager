import React from "react";
import { errorContextType } from "./types";

export const errorContext = React.createContext<errorContextType>({
  successStatus: false,
  successMessage: "",
  setSuccessStatus: () => {},
  setSuccessMessage: () => {},
  setTimeOut: () => {},
  timeOut: 0,
  toastData: (status: boolean, message: string, time: number) => {},
});
export default function ErrorContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [successStatus, setSuccessStatus] = React.useState<boolean>(false);
  const [successMessage, setSuccessMessage] = React.useState<string>("");
  const [timeOut, setTimeOut] = React.useState<number>(0);
  function toastData(status: boolean, message: string, time: number) {
    setSuccessStatus(status);
    setSuccessMessage(message);
    if (time > 5000) {
      setTimeOut(4000);
    } else {
      setTimeOut(time);
    }
  }
  return (
    <>
      <errorContext.Provider
        value={{
          successStatus,
          setSuccessStatus,
          successMessage,
          setSuccessMessage,
          timeOut,
          setTimeOut,
          toastData,
        }}
      >
        {children}
      </errorContext.Provider>
    </>
  );
}
