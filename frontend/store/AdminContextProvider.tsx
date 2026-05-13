import React from "react";
import { adminContextType } from "./types";
export const adminContext = React.createContext<adminContextType>({});
function AdminContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <adminContext.Provider value={{}}>{children}</adminContext.Provider>
    </>
  );
}

export default AdminContextProvider;
