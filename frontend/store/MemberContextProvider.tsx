import React from "react";
import { memberContextType } from "./types";
export const memberContext = React.createContext<memberContextType>({});
function MemberContextProvider({ children }: { children: React.ReactNode }) {
  return <memberContext.Provider value={{}}>{children}</memberContext.Provider>;
}

export default MemberContextProvider;
